import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import AuthStorage from "../utils/authStorage.js";

const useSignIn = () => {
	const [mutate, result] = useMutation(SIGN_IN);
	const authStorage = new AuthStorage();
	const apolloClient = useApolloClient();

	const signIn = async ({ username, password }) => {
		const response = await mutate({variables: {username, password}});
		authStorage.setAccessToken(response.data.authorize.accessToken);
		apolloClient.resetStore();
		return response;
	};

	return [signIn, result];
};

export default useSignIn;