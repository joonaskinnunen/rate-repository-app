import React from "react";
import useRepository from '../hooks/useRepository';
import {useParams} from "react-router-native";
import useReviews from '../hooks/useReviews';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import { FlatList } from 'react-native';
import ItemSeparator from './ItemSeparator';
import Text from './Text';

const SingleRepositoryView = () => {
    const {id} = useParams();
    console.log(id);
    const {repository} = useRepository(id);
    const { reviews, fetchMore } = useReviews({ id: id, first: 5 });

    console.log(reviews);

    const onEndReach = () => {
      console.log("onEndReached called");
      fetchMore();
    };

    const RepositoryInfo = ({ repository }) => {
      return <RepositoryItem item={repository} isSingleView={true} />;
    };

    const reviewNodes = reviews ? reviews.edges.map(edge => edge.node) : [];

    return repository ?
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={ 0.5 }
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository}
      />
    }
    /> : <Text>...</Text>;
};

export default SingleRepositoryView;