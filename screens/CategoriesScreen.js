import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderGrid = itemData => {
    return (
        <View style={styles.grid}>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderGrid}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        flex: 1,
    }
});

export default CategoriesScreen;