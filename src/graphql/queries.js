import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
    repositories {
      edges {
        node {
          ownerAvatarUrl
          description
          language
          ratingAverage
          reviewCount
          stargazersCount
          ownerName
          forksCount
          name
          id
        }
      }
    }
  }
`;

export const GET_USER = gql`
query {
  me {
    id
    username
  }
}
`;