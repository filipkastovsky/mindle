import { NextApiResponse } from 'next';

import { ApiError } from 'next/dist/next-server/server/api-utils';
import IApiRequest from './interfaces/IApiRequest';
import fetch from 'node-fetch';

export default async (req: IApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST')
            throw new ApiError(405, 'Unrecognized request method');

        if (!req.body.username || !req.body.password)
            throw new ApiError(403, 'Invalid request');

        const result = await fetch(process.env.LOGIN_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const { json } = await result.json();

        res.status(200).json({ statusCode: 200, data: json });
    } catch (err) {
        res.status(err?.statusCode || 500).json({
            statusCode: err?.statusCode || 500,
            message: err.message,
        });
    }
};

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
};
