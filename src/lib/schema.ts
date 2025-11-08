export const typeDefs = /* GraphQL */ `
  type Property {
    id: ID!
    title: String!
    description: String!
    price: Int!
    rooms: Int!
    area: Int!
    location: String!
    imageUrl: String!
    type: PropertyType!
    featured: Boolean!
  }

  enum PropertyType {
    Apartment
    House
    Villa
  }

  input PropertyFilter {
    type: PropertyType
    minPrice: Int
    maxPrice: Int
    minRooms: Int
  }

  type Query {
    properties(filter: PropertyFilter): [Property!]!
    property(id: ID!): Property
    featuredProperties: [Property!]!
  }
`;
