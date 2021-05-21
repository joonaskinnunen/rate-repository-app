import {useQuery} from "@apollo/client";
import { useState } from "react";
import {GET_REVIEWS} from "../graphql/queries.js";

const useReviews = (id) => {

    const [reviews, setReviews] = useState();

    const { error, loading } = useQuery(GET_REVIEWS, {
        variables: {id},
        fetchPolicy: "cache-and-network",
        onCompleted: (data) => {
          setReviews(data.repository.reviews);
        },
      }); 
      console.log(reviews);
      return { reviews, loading, error };
    };

export default useReviews;