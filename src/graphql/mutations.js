import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
mutation createUser($username: String!, $password: String!){
    createUser(user: {username: $username, password: $password}){
        username    
    }
}
`;

export const CREATE_REVIEW = gql`
mutation createReview(
    $ownerName: String!, 
    $repositoryName: String!, 
    $rating: Int! 
    $text: String
){
    createReview (review:{
        ownerName: $ownerName,
        repositoryName: $repositoryName,
        rating: $rating,
        text:$text}
        ){
        id
        repositoryId
    }
}
`;

export const DELETE_REVIEW = gql`
	mutation DeleteReview($id: ID!) {
		deleteReview(id: $id)
	}
`;