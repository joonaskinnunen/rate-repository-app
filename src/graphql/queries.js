import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql` 
query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int $after: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
      }
    }
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
  }
}`;


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
query repository ($id: ID!, $first: Int, $after: String) {
    repository (id:$id) {
        id
        fullName
        reviews (first: $first, after: $after) {
                totalCount
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        repositoryId
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
        }
    
    }
}
`;

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              fullName
              id
            }
          }
        }
      }
    }
  }
`;