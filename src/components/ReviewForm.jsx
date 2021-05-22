import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import FormikTextInput from "./FormikTextInput.jsx";
import * as yup from 'yup';
import { Formik } from "formik";
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';
import theme from "../theme.js";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    errorField: {
        borderColor: theme.colors.error,
    },
    successField: {
        borderColor: '#808080',
    }
});

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
};

const ReviewForm = () => {
    const [createReview] = useCreateReview();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;
        try {
            const response = await createReview({ ownerName, repositoryName, rating: parseInt(rating), text });
            history.push(`/repository/${response.repositoryId}`);
        } catch (e) {
            console.log(e);
        }
    };

    const validationSchema = yup.object().shape({
        ownerName: yup.string().required("repository owner name is required"),
        repositoryName: yup.string().required("repository name is required"),
        rating: yup.number().required("rating is required").min(0, "rating must be between 0-100").max(100, "rating must be between 0-100"),
        text: yup.string(),
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, errors }) => (
                    <View>
                        <FormikTextInput
                            name="ownerName"
                            placeholder="Repository owner's name"
                            style={errors.ownerName ? [styles.inputField, styles.errorField] : [styles.inputField, styles.successField]}
                        />
                        <FormikTextInput
                            name="repositoryName"
                            placeholder="Repository name"
                            style={errors.repositoryName ? [styles.inputField, styles.errorField] : [styles.inputField, styles.successField]}
                        />
                        <FormikTextInput
                            name="rating"
                            placeholder="Rating between 0 and 100"
                            style={errors.rating ? [styles.inputField, styles.errorField] : [styles.inputField, styles.successField]}
                        />
                        <FormikTextInput
                            name="text"
                            placeholder="Review"
                            style={errors.text ? [styles.inputField, styles.errorField] : [styles.inputField, styles.successField]}
                            textAlignVertical="top"
                            multiline={true}
                        />
                        <Button
                            buttonText="Create Review"
                            onSubmit={handleSubmit}
                        />
                    </View>

                )}
            </Formik>
        </View>
    );
};

export default ReviewForm;