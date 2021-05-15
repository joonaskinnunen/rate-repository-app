import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const LanguageBadge = ({ language }) => {

    const styles = StyleSheet.create({
        container: {
            marginTop: 20,
            padding: 10,
            width: 150,
            textAlign: 'center',
            textAlignVertical: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.languageBadgeBg,
            borderRadius: 10
        },
        text: {
            color: theme.colors.languageBadgeText
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{language}</Text>
        </View>
    );
};

export default LanguageBadge;