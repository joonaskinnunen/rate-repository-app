import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: theme.colors.primary,
        padding: 10,
        alignItems: 'center'
    }
});

const Button = ({ onSubmit, buttonText, isRed }) => {
    return <Pressable onPress={onSubmit}>
        <View style={[styles.button, isRed ? {backgroundColor: '#FF0000'} : {backgroundColor: theme.colors.primary}]}>
            <Text color='buttonText' align='center' fontWeight='bold' fontSize='subheading'>{buttonText}</Text>
        </View>
    </Pressable>;
};

export default Button;