import React, { useState } from 'react';
import useRepositories from "../hooks/useRepositories.js";
import { useDebounce } from 'use-debounce/lib';
import { useHistory } from 'react-router-native';
import RepositoryListContainer from "./RepositoryListContainer.jsx";

const RepositoryList = () => {

    const [orderBy, setOrderBy] = useState("latest");
    const [searchWord, setSearchWord] = useState("");
    const [search] = useDebounce(searchWord, 500);

    const history = useHistory();

    const goToRepository = (id) => {
        history.push(`/repository/${id}`);
    };

    let orderByVar = "CREATED_AT";
    let orderDirection = "DESC";

    if (orderBy == "latest") {
        orderByVar = "CREATED_AT";
        orderDirection = "DESC";
    } else if (orderBy == "highestRated") {
        orderByVar = "RATING_AVERAGE";
        orderDirection = "DESC";
    } else {
        orderByVar = "RATING_AVERAGE";
        orderDirection = "ASC";
    }

    const { repositories, fetchMore } = useRepositories({
        orderBy: orderByVar,
        orderDirection: orderDirection,
        searchKeyword: search,
        first: 5
    });

    console.log(repositories);

    const onEndReach = () => {
        console.log("onEndReached called");
        fetchMore();
    };

    const repositoryNodes = repositories && repositories.edges ? repositories.edges.map(edge => edge.node) : [];

    return (
        <RepositoryListContainer repositoryNodes={repositoryNodes} setOrderBy={setOrderBy} orderBy={orderBy} searchWord={searchWord} setSearchWord={setSearchWord} goToRepository={goToRepository} onEndReach={onEndReach} onEndReachedThreshold={0.5} />
    );
};

export default RepositoryList;