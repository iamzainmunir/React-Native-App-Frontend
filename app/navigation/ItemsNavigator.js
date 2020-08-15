import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import ListingItemsScreen from '../screens/ListingItemsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

export default ItemNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Items" component={ListingItemsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ItemsDetails" component={ListingDetailsScreen} options={{ title: "Item Details"}}/>
        </Stack.Navigator>
    )
}