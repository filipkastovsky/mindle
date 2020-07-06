import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloLink,
} from '@apollo/client';
import fetch from 'isomorphic-fetch';
import { setContext } from 'apollo-link-context';
import {
    TokenRefreshLink,
    HandleResponse,
    HandleError,
} from 'apollo-link-token-refresh';
import { isJwtExpired } from './utils/isJwtExpired';
import { getAccessToken } from './utils/getAccessToken';
import { IRefreshData } from '../interfaces/IRefreshData';
import { getRefreshToken } from './utils/getRefreshToken';
import { setAccessToken } from './utils/setAccessToken';
import Router from 'next/router';
import { Routes } from '../Routes';

const fetchAccessToken = () =>
    fetch(`/api/auth/refresh`, {
        method: 'POST',
        body: JSON.stringify({ refreshToken: getRefreshToken() }),
    });

const handleResponse: HandleResponse = (_operation) => async (
    res: Response,
) => {
    const { access_token } = (await res.json())['data'] as IRefreshData;
    return { access_token };
};

const handleFetch = (access_token: string) => {
    setAccessToken(access_token);
    return;
};

const isTokenValidOrUndefined = () =>
    !(!!getAccessToken() && isJwtExpired(getAccessToken()!));

const handleError: HandleError = () => {
    localStorage.clear();
    Router.replace(Routes.Root);
};

const client = (uri = process.env.API_URL) => {
    const httpLink = new HttpLink({ uri, fetch } as any);
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: !!getAccessToken()
                    ? `Bearer ${getAccessToken()}`
                    : null,
            },
        };
    });

    const tokenRefreshLink = new TokenRefreshLink({
        isTokenValidOrUndefined,
        accessTokenField: 'access_token',
        fetchAccessToken,
        handleFetch,
        handleResponse,
        handleError,
    });

    return new ApolloClient({
        link: ApolloLink.from([
            tokenRefreshLink,
            (authLink as unknown) as ApolloLink,
            httpLink,
        ]),
        cache: new InMemoryCache(),
        defaultOptions: { query: { fetchPolicy: 'cache-only' } },
    });
};

export default client;
