import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    tab: {
        padding: 20
    },
    text: {
        color: theme.colors.appBarText
    }
});

const AppBarTab = ({ title }) => {
    return (
        <Pressable>
            <View style={styles.tab}>
                <Text style={styles.text} fontWeight="bold">{title}</Text>
            </View>
        </Pressable>
    );
};

export default AppBarTab;