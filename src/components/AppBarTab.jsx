import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20
    },
    text: {
        color: theme.colors.appBarText
    }
});

const AppBarTab = ({ title, link }) => {
    return (
        <Pressable>
            <Link to={link}>
                <View style={styles.container}>
                    <Text style={styles.text} fontWeight="bold">{title}</Text>
                </View>
            </Link>
        </Pressable>
    );
};

export default AppBarTab;