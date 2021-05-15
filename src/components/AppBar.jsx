import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.appBarBg,
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title="Repositories" link="/" />
            <AppBarTab title="Sign in" link="/signin" />
        </View>
    );
};

export default AppBar;