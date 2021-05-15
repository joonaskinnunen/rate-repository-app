import React from 'react';
import { Text, View } from 'react-native';

const RepositoryItem = ({item}) => {
    return (
        <View>
            <Text>
                Fullname: {item.fullName + "\n"}
                Description: {item.description + "\n"}
                Language: {item.language + "\n"}
                Stars: {item.stargazersCount + "\n"}
                Forks: {item.forksCount + "\n"}
                Reviews: {item.reviewCount + "\n"}
                Ratting: {item.ratingAverage + "\n"}
            </Text>
        </View>

    );
};

export default RepositoryItem;