import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
          node {
            ownerName,
            name,
            ratingAverage,
            reviewCount,
            stargazersCount,
            forksCount,
            language,
            description,
            ownerAvatarUrl
          }
        }
      }
    }
`;

export const GET_AUTHORIZED_USER=gql`
    query{
        authorizedUser{
            id
            username
        }
    }
`;