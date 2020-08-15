import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import PostItemScreen from "../screens/PostItemScreen"
import ItemsNavigator from './ItemsNavigator';
import AccountNavigator from './AccountNavigator';
import PostItemButton from './PostItemButton';

const Tab = createBottomTabNavigator();
export default AppNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Items" component={ItemsNavigator} options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="shopping-search" color={color} size={size}/>
            }}/>
            <Tab.Screen name="PostItem" component={PostItemScreen} options={({ navigation}) => ({
                tabBarButton: () => <PostItemButton onPress={() => navigation.navigate("PostItem")}/>
            })}/>
            <Tab.Screen name="Account" component={AccountNavigator} options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size}/>
            }}/>
        </Tab.Navigator>
    )
}