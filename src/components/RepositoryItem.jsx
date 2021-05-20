import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItemBoxView from './RepositoryItemBoxView';
import LanguageBadge from './LanguageBadge';
import Button from './Button';
import * as Linking from 'expo-linking';
import theme from '../theme';

const RepositoryItem = ({ item, isSingleView }) => {

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
        },
        button: {
            backgroundColor: theme.colors.primary,
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15 
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
        url
    } = item;

    const handlePress = () => {
        Linking.openURL(url);
      };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
                <View style={styles.column}>
                    <Text fontSize="subheading" fontWeight="bold" testID="name">{fullName}</Text>
                    <Text fontSize="subheading" testID="description">{description}</Text>
                </View>
            </View>
            <LanguageBadge language={language} />
            <View style={styles.row}>
                <RepositoryItemBoxView title="Stars" value={stargazersCount} />
                <RepositoryItemBoxView title="Forks" value={forksCount} />
                <RepositoryItemBoxView title="Reviews" value={reviewCount} />
                <RepositoryItemBoxView title="Rating" value={ratingAverage} />
            </View>
            {isSingleView && <Button onSubmit={handlePress} buttonText="Open in GitHub"></Button>}
        </View>

    );
};

export default RepositoryItem;