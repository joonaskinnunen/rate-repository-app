import React from 'react';
import { Pressable } from 'react-native';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});


const ItemSeparator = () => <View style={styles.separator} />;

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