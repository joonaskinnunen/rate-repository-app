import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const RepositoryItemBoxView = ({ title, value }) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            padding: 20
        },
    });

    const parseValue = (valueToParse) => {
        let newValue = valueToParse;
        if(valueToParse > 1000) {
            newValue = valueToParse / 1000;
            newValue = newValue.toFixed(1) + "k";
        }
        return newValue;
    };

    const testID = title.toLowerCase();

    return (
        <View style={styles.container}>
            <Text fontSize="subheading" fontWeight="bold" style={styles.text}>{title}</Text>
            <Text fontSize="subheading" style={styles.text} testID={testID}>{parseValue(value)}</Text>
        </View>
    );
};

export default RepositoryItemBoxView;