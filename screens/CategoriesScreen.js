import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => {
                props.navigation.navigate('CategoryMeals', {categoryId: itemData.item.id})
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderGridItem}
            />

    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android ' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
    }
});

export default CategoriesScreen;