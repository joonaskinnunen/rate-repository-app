import React from "react";
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from "date-fns";

const ReviewItem = ({ review }) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center'
        },
        column: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            padding: 20
        },
        rating: {
            width: 50,
            height: 50,
            borderWidth: 5,
            borderColor: theme.colors.primary,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center'
        },
        margin: {
            marginBottom: 10,
        }
    });

    const formatDate = (date) => {
        return format(new Date(date), "dd.MM.yyyy");
    };

    return review ? <View style={styles.container}>
            <View style={[styles.rating, styles.margin]}><Text>{review.rating}</Text></View>
            <View style={[styles.column, styles.margin]}>
                <Text fontSize="subheading" fontWeight="bold" style={styles.margin}>{review.user.username}</Text>
                <Text color="textSecondary" style={styles.margin}>{formatDate(review.createdAt)}</Text>
                <Text>{review.text}</Text>
            </View>
        </View> : <Text>...</Text>;
};

export default ReviewItem;