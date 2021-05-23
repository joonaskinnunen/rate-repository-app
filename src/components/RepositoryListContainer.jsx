import React from 'react';
import { FlatList, Pressable, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

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

export class RepositoryListContainer extends React.Component {

    renderHeader = () => {
        const {orderBy, setOrderBy, searchWord, setSearchWord} = this.props;

        return (
            <><OrderMenu orderBy={orderBy} setOrderBy={setOrderBy} />
            <Searchbar placeholder='Search' value={searchWord} onChangeText={x => setSearchWord(x)} />
            </>
        );
      };
      
    render() {

        const {repositoryNodes, goToRepository} = this.props;
    
    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <Pressable onPress={() => goToRepository(item.id)}><RepositoryItem item={item} /></Pressable>}
            ListHeaderComponent={this.renderHeader}
        />
    );
}
}

export default RepositoryListContainer;