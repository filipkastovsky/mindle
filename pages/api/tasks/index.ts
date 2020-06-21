import { NextApiResponse } from 'next';

import { ApiError } from 'next/dist/next-server/server/api-utils';
import IApiRequest from './interfaces/IApiRequest';
import timestampStore from './utils/timestampStore';
import createApolloClient from './utils/createApolloClient';
import getConnectedServicesAsync from './utils/getConnectedServicesAsync';
import Services from '../../../utils/Services';
import IReqBody from '../services/bakalari/interfaces/IReqBody';
import axios from 'axios';
import ITask from '../../../interfaces/ITask';
import {
    CreateManyTasksMutationVariables,
    CreateManyTasksMutation,
    CreateManyTasksDocument,
} from '../../../graphql/gen';
import jwtDecode from 'jwt-decode';
import { IDecodedJwt } from '../../../interfaces/IDecodedJwt';
import statusStore from './utils/statusStore';

export default async (req: IApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST')
            throw new ApiError(405, 'Unrecognized request method');

        if (!req.body.token)
            throw new ApiError(401, 'Unauthorized access attempt');

        if (!req.body.serviceCredentialsJSON)
            throw new ApiError(400, 'No credentials provided');

        // TODO: This typing will work for Bakaláři only
        const serviceCredentials = JSON.parse(
            req.body.serviceCredentialsJSON,
        ) as Record<Services, IReqBody>;

        const { sub } = jwtDecode(req.body.token) as IDecodedJwt;

        const client = createApolloClient(req.body.token);
        const connectedServices = await getConnectedServicesAsync(client);

        const lastTimestamp = (await timestampStore.getItem(sub)) ?? 0;

        if (!connectedServices?.length)
            throw new ApiError(400, 'No connected services');

        await statusStore.setItem(sub, true);
        for (const [service] of connectedServices) {
            if (service === 'bakalari') {
                axios
                    .post(
                        `${
                            process.env.NODE_ENV === 'development'
                                ? 'http'
                                : 'https'
                        }://${req.headers.host}/api/services/bakalari`,
                        serviceCredentials.bakalari,
                    )
                    .then(({ data }) => data.data.tasks as ITask[])
                    .then((tasks) => {
                        const userTasks = tasks
                            // Don't reinsert old items (News sync)
                            .filter((task) =>
                                task.date ? task.date > lastTimestamp : true,
                            )
                            .map((task) => ({
                                ...task,
                                user_id: sub,
                            }));
                        if (!userTasks.length)
                            throw new Error('No new tasks found');

                        return client.mutate<
                            CreateManyTasksMutation,
                            CreateManyTasksMutationVariables
                        >({
                            mutation: CreateManyTasksDocument,
                            variables: { tasks: userTasks },
                        });
                    })
                    .then((result) => {
                        if (result.errors) throw result.errors;
                        timestampStore.setItem(sub, Date.now());
                    })
                    .catch((err) => {
                        console.error(err?.response?.data || err);
                    })
                    .finally(() => {
                        statusStore.setItem(sub, false);
                        client.stop();
                    });
            }
        }

        res.status(200).json({
            statusCode: 200,
        });
    } catch (err) {
        console.error(err);
        res.status(err?.statusCode || 500).json({
            statusCode: err?.statusCode || 500,
            message: err.message,
        });
    }
};
