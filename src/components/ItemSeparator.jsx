import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemSeparator: {
        height: 10,
        backgroundColor: '#808080'
    },
});

const ItemSeparator = () => <View style={styles.itemSeparator} />;

export default ItemSeparator;