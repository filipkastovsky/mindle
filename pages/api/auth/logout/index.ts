import { NextApiResponse } from 'next';

import { ApiError } from 'next/dist/next-server/server/api-utils';
import IApiRequest from './interfaces/IApiRequest';
import fetch from 'isomorphic-fetch';
import { getAdminAuthAsync } from '../utils/getAdminAuthAsync';

export default async (req: IApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST')
            throw new ApiError(405, 'Unrecognized request method');

        if (!req.body.userId) throw new ApiError(403, 'Invalid request');

        const { access_token } = await getAdminAuthAsync();
        await fetch(`${process.env.USER_API_URL}/${req.body.userId}/logout`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        res.status(204).json({ statusCode: 204 });
    } catch (err) {
        console.error(err);
        res.status(err?.statusCode || 500).json({
            statusCode: err?.statusCode || 500,
            message: err.message,
        });
    }
};
