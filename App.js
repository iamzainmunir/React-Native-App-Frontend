import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import AccountScreen from "./app/screens/AccountScreen";
import ListingItemsScreen from "./app/screens/ListingItemsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import PostItemScreen from './app/screens/PostItemScreen';
import Screen from "./app/components/Screen"
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import LoadingAnimation from './app/components/ActivityIndicator';



const Stack = createStackNavigator();
const StackNavigator = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen name="itemListingScreen" component={ListingItemsScreen}/>
    <Stack.Screen name="itemListingDetailsScreen" component={ListingDetailsScreen}/>
  </Stack.Navigator>
  )
}
export default function App() {

  return (
    // <LoadingAnimation visible={true}/>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
        //<ListingDetailsScreen title="test" price="444" image={require("./app/assets/sofa.jpg")}/>
  )
}


