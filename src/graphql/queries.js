import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
        edges {
          node {
            id,
            fullName,
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

export const GET_REPOSITORY = gql`
    query single_repo($id: ID!){
        repository(id: $id) {
            id,
            fullName,
            url,
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
`;

export const GET_REVIEWS = gql`
    query reviews($id: ID!){
        repository(id: $id) {
            id
            fullName
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;

export const GET_AUTHORIZED_USER = gql`
    query{
        authorizedUser{
            id
            username
        }
    }
`;