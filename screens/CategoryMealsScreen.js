import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CategoriesScreen from './CategoriesScreen';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Button title="Go To Meals Detail!" onPress={() => {
                props.navigation.navigate('MealsDetail');
            }} />
            <Button
                title="Go Back"
                onPress={() => { props.navigation.goBack() }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;