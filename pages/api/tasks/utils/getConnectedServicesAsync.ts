import {
    QueryResult,
    ApolloClient,
    NormalizedCacheObject,
} from '@apollo/client';
import {
    ConnectedServicesDocument,
    ConnectedServicesQuery,
} from '../../../../graphql/gen';

export default async (client: ApolloClient<NormalizedCacheObject>) => {
    const connectedServices = (await client.query({
        query: ConnectedServicesDocument,
    })) as QueryResult<ConnectedServicesQuery>;

    return (
        connectedServices.data?.connected_service &&
        Object.entries(connectedServices.data?.connected_service).filter(
            ([key, value]) => key !== '_id' && !!value,
        )
    );
};
