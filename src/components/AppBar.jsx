import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBg,
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scrollView}>
                <AppBarTab title="Repositories" link="/" />
                <AppBarTab title="Sign in" link="/signin" />
            </ScrollView>
        </View>
    );
};

export default AppBar;