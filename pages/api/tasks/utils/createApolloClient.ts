import {
    HttpLink,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

export default (token: string, uri = process.env.API_URL) => {
    const httpLink = new HttpLink({ uri, fetch } as any);
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: !!token ? `Bearer ${token}` : null,
            },
        };
    });

    return new ApolloClient({
        ssrMode: true,
        link: ApolloLink.from([(authLink as unknown) as ApolloLink, httpLink]),
        cache: new InMemoryCache(),
    });
};
