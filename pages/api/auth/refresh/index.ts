import { NextApiResponse } from 'next';

import { ApiError } from 'next/dist/next-server/server/api-utils';
import IApiRequest from './interfaces/IApiRequest';
import fetch from 'isomorphic-fetch';

export default async (req: IApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST')
            throw new ApiError(405, 'Unrecognized request method');

        const body = await JSON.parse(req?.body);
        if (!body.refreshToken) throw new ApiError(403, 'Invalid request');

        const result = await fetch(process.env.REFRESH_URL!, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${body.refreshToken}`,
            },
        });

        const json = await result.json();

        if (json.error) throw new ApiError(400, json.error);

        res.status(200).json({ statusCode: 200, data: json });
    } catch (err) {
        console.error(err);
        res.status(err?.statusCode || 500).json({
            statusCode: err?.statusCode || 500,
            message: err.message,
        });
    }
};
