import { NextApiResponse } from 'next';

import { ApiError } from 'next/dist/next-server/server/api-utils';
import IApiRequest from './interfaces/IApiRequest';
import fetch from 'isomorphic-fetch';
import { getAdminAuthAsync } from '../utils/getAdminAuthAsync';

export default async (req: IApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST')
            throw new ApiError(405, 'Unrecognized request method');

        if (!req.body.email || !req.body.password)
            throw new ApiError(403, 'Invalid request');

        const { access_token } = await getAdminAuthAsync();

        const result = await fetch(process.env.USER_API_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify(req.body),
        });

        const json = await result.json();

        if (json.error) throw new ApiError(400, json.error);

        res.status(201).json({ statusCode: 201, data: json });
    } catch (err) {
        res.status(err?.statusCode || 500).json({
            statusCode: err?.statusCode || 500,
            message: err.message,
        });
    }
};
