import React from "react";
import { View, StyleSheet, Alert } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from "date-fns";
import Button from './Button';
import { useHistory } from 'react-router-native';
import useReviewDelete from '../hooks/useReviewDelete';

const MyReviewItem = ({ review, refetch }) => {

    const history = useHistory();

    const {deleteReview} = useReviewDelete();

    const handleReviewDelete = () => {
        console.log("handleReviewDelete called");
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: async () => {
              await deleteReview({ id: review.id });
              refetch();
            }
          }
        ]);
      };

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
            alignItems: 'center'
        },
        column: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            padding: 20
        },
        row: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
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

    const goToRepository = (id) => {
        history.push(`/repository/${id}`);
    };

    return review ? <View style={styles.container}>
        <View style={styles.row}>
            <View style={[styles.rating, styles.margin]}><Text>{review.rating}</Text></View>
            <View style={[styles.column, styles.margin]}>
                <Text fontSize="subheading" fontWeight="bold" style={styles.margin}>{review.repository.fullName}</Text>
                <Text color="textSecondary" style={styles.margin}>{formatDate(review.createdAt)}</Text>
                <Text>{review.text}</Text>
            </View>
        </View>
        <View style={styles.row}>
            <Button onSubmit={() => goToRepository(review.repository.id)} buttonText="View repository" />
            <Button on onSubmit={handleReviewDelete} buttonText="Delete review" isRed={true} />
        </View>
    </View> : <Text>...</Text>;
};

export default MyReviewItem;