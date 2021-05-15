import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItemBoxView from './RepositoryItemBoxView';
import LanguageBadge from './LanguageBadge';

const RepositoryItem = ({ item }) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            padding: 20
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
        },
        column: {
            display: 'flex',
        },
        avatar: {
            width: 50,
            height: 50,
            marginRight: 20
        }
    });

    const {
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl,
    } = item;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
                <View style={styles.column}>
                    <Text fontSize="subheading" fontWeight="bold">{fullName}</Text>
                    <Text fontSize="subheading">{description}</Text>
                </View>
            </View>
            <LanguageBadge language={language} />
            <View style={styles.row}>
                <RepositoryItemBoxView title="Stars" value={stargazersCount} />
                <RepositoryItemBoxView title="Forks" value={forksCount} />
                <RepositoryItemBoxView title="Reviews" value={reviewCount} />
                <RepositoryItemBoxView title="Rating" value={ratingAverage} />
            </View>
        </View>

    );
};

export default RepositoryItem;