import React from "react";
import { View, StyleSheet, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        color: theme.colors.primary,
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput
                name='username'
                placeholder='Username'
            />
            <FormikTextInput
                name='password'
                placeholder='Password'
                secureTextEntry
            />
            <Button onSubmit={onSubmit} title="Sign in" style={styles.button}>Sign in</Button>
        </View>
    );
};

export default SignInForm;