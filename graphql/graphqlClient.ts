import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloLink,
} from '@apollo/client';
import Router from 'next/router';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const client = (uri = process.env.API_URL) => {
    const httpLink = new HttpLink({ uri, fetch } as any);

    const authLink = setContext((_, { headers }) => {
        const authToken = localStorage.getItem('token');
        if (authToken) {
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${authToken}`,
                },
            };
        }

        return {
            headers,
        };
    });

    const resetLink = onError(({ networkError }: any) => {
        if (networkError && networkError.statusCode === 401) {
            localStorage.clear();
            Router.replace('/');
        }
    });

    return new ApolloClient({
        ssrMode: true,
        link: ApolloLink.from([
            (authLink as unknown) as ApolloLink,
            (resetLink as unknown) as ApolloLink,
            httpLink,
        ]),
        cache: new InMemoryCache(),
    });
};

export default client;
