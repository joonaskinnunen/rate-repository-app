import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: theme.colors.error
    },
    textInput: {
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
    },
    textInputSuccess: {
        borderColor: theme.colors.textInputBorder,
    },
    textInputError: {
        borderColor: theme.colors.error
    }
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                style={showError ? [styles.textInput, styles.textInputError] : [styles.textInput, styles.textInputSuccess]}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;