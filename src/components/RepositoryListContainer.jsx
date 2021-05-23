import React from 'react';
import { FlatList, Pressable, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-native';
import ItemSeparator from './ItemSeparator';
import { Picker } from '@react-native-picker/picker';

const OrderMenu = ({ orderBy, setOrderBy }) => {

    const styles = StyleSheet.create({
        container: {
            padding: 10,
        },
    });

    return (
        <View style={styles.container}>
            <Picker selectedValue={orderBy} onValueChange={value => setOrderBy(value)} prompt='Select an order...'>
                <Picker.Item label='Latest repositories' value='latest' />
                <Picker.Item label='Highest rated repositories' value='highestRated' />
                <Picker.Item label='Lowest rated repositories' value='lowestRated' />
            </Picker>
        </View>
    );
};

const RepositoryListContainer = ({repositoryNodes, setOrderBy, orderBy} ) => {

    const history = useHistory();

    const goToRepository = (id) => {
        console.log(`go to: /repository/${id}`);
        history.push(`/repository/${id}`);
    };

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <Pressable onPress={() => goToRepository(item.id)}><RepositoryItem item={item} /></Pressable>}
            ListHeaderComponent={() => <OrderMenu orderBy={orderBy} setOrderBy={setOrderBy} />}
        />
    );
};

export default RepositoryListContainer;