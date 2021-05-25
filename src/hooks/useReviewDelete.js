import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
    console.log("useDeleteReview called");
    const [mutate, result] = useMutation(DELETE_REVIEW);

    const deleteReview = async (values) => {
        const data = await mutate({
            variables: values,
        });
        return data;
    };

    return { deleteReview, result };
};

export default useDeleteReview;