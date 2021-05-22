import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import { useHistory } from 'react-router-native';

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

    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const history = useHistory();
    const { authorizedUser } = useAuthorizedUser();
    console.log(authorizedUser);

    const signOut = async () => {
        console.log("sign out called");
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        history.push('/');
    };

    const goToCreateReview = () => {
        history.push(`/review-form`);    
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scrollView}>
                <AppBarTab title="Repositories" link="/" />
                {authorizedUser != null ? <AppBarTab title="Sign out" onPress={signOut} /> : <AppBarTab title="Sign in" link="/signin" />}
                {authorizedUser != null && <AppBarTab title="Create a review" onPress={goToCreateReview} />}
            </ScrollView>
        </View>
    );
};

export default AppBar;