import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = variables => {
    const { data, error, loading, refetch } = useQuery(GET_AUTHORIZED_USER, {
        variables,
        fetchPolicy: 'cache-and-network'
    });

    return { authorizedUser: data && data.authorizedUser, loading, refetch };
};

export default useAuthorizedUser;