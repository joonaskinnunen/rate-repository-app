import React from "react";
import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet } from "react-native";
import Button from './Button';

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});

const SignUpForm = ({onSubmit}) => {
    return (
        <View style={styles.container}>
            <FormikTextInput
                name="username"
                placeholder="Username"
            />
            <FormikTextInput
                name="password"
                secureTextEntry
                placeholder="Password"
            />
            <FormikTextInput
                name="passwordConfirmation"
                secureTextEntry
                placeholder="Password confirmation" />
            <Button onSubmit={onSubmit} buttonText="Sign up" />
        </View>
    );
};

export default SignUpForm;