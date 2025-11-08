import { gql } from '@apollo/client';

  export const GET_PROPERTIES = gql`
    query GetProperties($filter: PropertyFilter) {
      properties(filter: $filter) {
        id
        title
        description
        price
        rooms
        area
        location
        imageUrl
        type
        featured
      }
    }
  `;

  export const GET_PROPERTY = gql`
    query GetProperty($id: ID!) {
      property(id: $id) {
        id
        title
        description
        price
        rooms
        area
        location
        imageUrl
        type
        featured
      }
    }
  `;

    export const GET_PROPERTY_METADATA = gql`
      query GetProperty($id: ID!) {
        property(id: $id) {
          id
          title
          price
          location
          imageUrl
        }
      }
  `;


  export const GET_FEATURED_PROPERTIES = gql`
    query GetFeaturedProperties {
      featuredProperties {
        id
        title
        price
        imageUrl
        location
      }
    }
  `;