import type { GetServerSidePropsContext } from 'next';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  return new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  });
};
