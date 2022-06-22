import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oz9grs1g7t01xs22swa5k8/master',
    cache: new InMemoryCache()
})