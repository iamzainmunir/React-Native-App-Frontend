import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import colors from "../config/colors"
import ListItem from '../components/ListItem'
import ListItemSeparator from "../components/ListItemSeparator"
import Icon from '../components/Icon'
import routes from "../navigation/routes"

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
]
export default function AccountScreen({ navigation }) {
    return (
      <Screen style = {styles.screen}>
          <View style={styles.container}>
            <ListItem
                title = "Zain Munir"
                subTitle = "zainmunir4112@gmail.com"
                image = {require("../assets/zain.png")}
            />
          </View>

          <View style={styles.container}>
            <FlatList 
                data={menuItems}
                keyExtractor = {menuItem => menuItem.title}
                ItemSeparatorComponent = {ListItemSeparator}
                renderItem = {({ item }) => 
                <ListItem 
                    title={item.title} 
                    IconComponent = {<Icon 
                    name={item.icon.name} 
                    backgroundColor={item.icon.backgroundColor}/>}
                    onPress={() => navigation.navigate(item.targetScreen)}
                />}
            />
          </View>
          <ListItem
            title="Log Out"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
          />
      </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})
