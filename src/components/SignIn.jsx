import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import SignInForm from "./SignInForm";
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
});

const initialValues = {
    username: "",
    password: "",
};

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;
        console.log(username + ", " + password);
        try {
            const {data} = await signIn({username, password});
            console.log(data);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;