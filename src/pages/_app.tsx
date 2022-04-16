import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';

import { createApolloClient } from '../lib/apolloClient';

const apolloClient = createApolloClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
