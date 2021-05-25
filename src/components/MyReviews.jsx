import React from 'react';
import { FlatList } from 'react-native';
import useMyReviews from '../hooks/useMyReviews';
import ItemSeparator from './ItemSeparator';
import MyReviewItem from './MyReviewItem';

const MyReviews = () => {

    const { reviews, refetch } = useMyReviews();

    console.log(reviews);

    return (
        <FlatList
            data={reviews}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <MyReviewItem review={item} refetch={refetch} />}
        />
    );
};

export default MyReviews;