import ApolloClient from 'apollo-client';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

export default new ApolloClient({
    link: createHttpLink({
        uri: process.env.API_URL,
        fetch: fetch as any,
    }),
    cache: new InMemoryCache(),
});
