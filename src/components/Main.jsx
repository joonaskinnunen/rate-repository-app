import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SingleRepositoryView from './SingleRepositoryView';
import AppBar from './AppBar';
import { Route, Switch } from 'react-router-native';
import SignIn from './SignIn';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signin" exact>
                    <SignIn />
                </Route>
                    <Route path="/repository/:id" exact>
                    <SingleRepositoryView />
                </Route>
                <Route path="/review-form" exact>
                    <ReviewForm/>
                </Route>
                <Route path="/sign-up" exact>
                    <SignUp/>
                </Route>
            </Switch>
        </View>
    );
};

export default Main;