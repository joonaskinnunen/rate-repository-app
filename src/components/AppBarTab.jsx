import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20
    },
    text: {
        color: theme.colors.appBarText
    }
});

const AppBarTab = ({ title, link, onPress }) => {
    return (
        <View style={styles.container}>
            {link
        ? <Link to={link} component={Pressable} style={styles.text}><Text style={styles.text} fontWeight="bold">{title}</Text></Link>
        : <Pressable onPress={onPress}><Text style={styles.text} fontWeight="bold">{title}</Text></Pressable>
      }
        </View>
    );
};

export default AppBarTab;