import React from "react";
import { View, StyleSheet } from "react-native";
import Button from './Button';
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput
                name='username'
                placeholder='Username'
                testID='signInUsername'
            />
            <FormikTextInput
                name='password'
                placeholder='Password'
                secureTextEntry
                testID='signInPassword'
            />
            <Button onSubmit={onSubmit} buttonText="Sign in" testID="signInButton">Sign in</Button>
        </View>
    );
};

export default SignInForm;