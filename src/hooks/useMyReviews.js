import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "./../graphql/queries";

const useMyReviews = () => {
  const { data, error, loading, refetch } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true },
  });

  return {
    reviews: data ? data.authorizedUser.reviews.edges.map(({ node }) => node) : [],
    error,
    loading,
    refetch,
  };
};

export default useMyReviews;