import { NextApiResponse } from 'next';

import { ApiError } from 'next/dist/next-server/server/api-utils';
import IApiRequest from './interfaces/IApiRequest';
import jwtDecode from 'jwt-decode';
import { IDecodedJwt } from '../../../../interfaces/IDecodedJwt';
import statusStore from '../utils/statusStore';

export default async (req: IApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST')
            throw new ApiError(405, 'Unrecognized request method');

        if (!req.body.token)
            throw new ApiError(401, 'Unauthorized access attempt');

        const { sub } = jwtDecode(req.body.token) as IDecodedJwt;
        const pending = !!(await statusStore.getItem(sub));
        res.status(200).json({
            statusCode: 200,
            data: { pending },
        });
    } catch (err) {
        console.error(err);
        res.status(err?.statusCode || 500).json({
            statusCode: err?.statusCode || 500,
            message: err.message,
        });
    }
};
