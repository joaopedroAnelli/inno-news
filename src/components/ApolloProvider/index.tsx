import {
  ApolloProvider as ApolloProviderRoot,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clk03d7700tx001uhd14jgcm7/master',
  cache: new InMemoryCache(),
});

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProviderRoot client={client}>{children}</ApolloProviderRoot>;
}
