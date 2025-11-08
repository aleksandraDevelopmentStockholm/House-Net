  import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

  // For server-side usage (in Server Components)
  export function getClient() {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3000/api/graphql',
        fetchOptions: { cache: 'no-store' },
      }),
    });
  }

  // For client-side usage (in Client Components)
  export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3000/api/graphql',
    }),
  });