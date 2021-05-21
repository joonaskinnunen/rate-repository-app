import React from 'react';
import { Pressable } from 'react-native';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-native';
import ItemSeparator from './ItemSeparator';

const RepositoryListContainer = ({ repositories }) => {

    const history = useHistory();
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

    const goToRepository = (id) => {
        console.log(`go to: /repository/${id}`);
        history.push(`/repository/${id}`);
    };

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <Pressable onPress={() => goToRepository(item.id)}><RepositoryItem item={item} /></Pressable>} />
    );
};

export default RepositoryListContainer;