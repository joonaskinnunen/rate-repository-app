import React, { useState } from 'react';
import useRepositories from "../hooks/useRepositories.js";
import RepositoryListContainer from "./RepositoryListContainer.jsx";

const RepositoryList = () => {

    const [orderBy, setOrderBy] = useState("latest");

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

    const { repositories } = useRepositories({
        orderBy: orderByVar,
        orderDirection: orderDirection,
    });

    const repositoryNodes = repositories && repositories.edges ? repositories.edges.map(edge => edge.node) : [];

    return (
        <RepositoryListContainer repositoryNodes={repositoryNodes} setOrderBy={setOrderBy} orderBy={orderBy} />
    );
};

export default RepositoryList;