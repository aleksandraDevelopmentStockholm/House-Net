import { createSchema, createYoga } from 'graphql-yoga';
import { mockProperties } from '@/lib/mock-data';
import { typeDefs } from '@/lib/schema';
import type {
  QueryPropertiesArgs,
  QueryPropertyArgs,
  Property
} from '@/generated/graphql';

const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: {
      properties: (_parent: unknown, args: QueryPropertiesArgs): Property[] => {
        let filtered = [...mockProperties];

        if (args.filter) {
          const { type, minPrice, maxPrice, minRooms } = args.filter;

          if (type) {
            filtered = filtered.filter((p) => p.type === type);
          }
          if (minPrice) {
            filtered = filtered.filter((p) => p.price >= minPrice);
          }
          if (maxPrice) {
            filtered = filtered.filter((p) => p.price <= maxPrice);
          }
          if (minRooms) {
            filtered = filtered.filter((p) => p.rooms >= minRooms);
          }
        }

        return filtered;
      },
      property: (_parent: unknown, args: QueryPropertyArgs): Property | undefined => {
        return mockProperties.find((p) => p.id === args.id);
      },
      featuredProperties: (): Property[] => {
        return mockProperties.filter((p) => p.featured);
      },
    },
  },
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

export async function GET(request: Request) {
  return handleRequest(request, {});
}

export async function POST(request: Request) {
  return handleRequest(request, {});
}
