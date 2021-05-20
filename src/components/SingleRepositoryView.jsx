import React from "react";
import useRepository from '../hooks/useRepository';
import {useParams} from "react-router-native";
import RepositoryItem from './RepositoryItem';

const SingleRepositoryView = () => {
    const {id} = useParams();
    console.log(id);
    const {repository} = useRepository(id);

    return (
        <>
        {repository && <RepositoryItem item={repository} isSingleView={true} />}
        </>
    );
};

export default SingleRepositoryView;