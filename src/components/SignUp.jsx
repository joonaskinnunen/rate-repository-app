import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import SignUpForm from './SignUpForm';
import { useHistory } from "react-router-native";

const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
        .min(1, "Username length must be at least 1 character")
        .max(30, "Username length must 30 or less"),
    password: yup
        .string()
        .required("Password is required")
        .min(5, "Password length must be at least 5 characters")
        .max(50, "Password length must be 50 or less"),
    passwordConfirmation: yup
        .string()
        .required("Password confirmation is required")
        .oneOf([yup.ref("password"), null], "Passwords don't match")
});

const SignUp = () => {
    const history = useHistory();
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        try {
            await signUp(values);
            await signIn(values);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;