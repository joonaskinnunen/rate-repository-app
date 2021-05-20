import {useQuery} from "@apollo/client";
import { useState } from "react";
import {GET_REPOSITORY} from "../graphql/queries.js";

const useRepository = (id) => {

    const [repository, setRepository] = useState();

    const { error, loading } = useQuery(GET_REPOSITORY, {
        variables: {id},
        fetchPolicy: "cache-and-network",
        onCompleted: (data) => {
          setRepository(data.repository);
        },
      }); 
      console.log(repository);
      return { repository, loading, error };
    };

export default useRepository;