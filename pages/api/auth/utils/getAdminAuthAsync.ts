import fetch from 'isomorphic-fetch';

interface IAdminAuthRes {
    access_token: string;
}

export const getAdminAuthAsync = (
    username: string = process.env.AUTH_PUBLIC_KEY!,
    apiKey: string = process.env.AUTH_PRIVATE_KEY!,
) =>
    fetch(process.env.AUTH_ADMIN_LOGIN_URL!, {
        method: 'POST',
        body: JSON.stringify({ username, apiKey }),
    }).then((res) => res.json()) as Promise<IAdminAuthRes>;
