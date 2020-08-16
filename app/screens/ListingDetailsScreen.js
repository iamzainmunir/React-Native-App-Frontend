import React from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native'
import { Image } from "react-native-expo-image-cache";


import AppText from "../components/AppText"
import colors from "../config/colors"
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({ route }) {
    const item = route.params
    return (
        <SafeAreaView style={styles.listingContainer}>
            <Image style={styles.image} uri={item.image[0].url} preview={{ uri: item.image[0].thumbnailUrl }} tint="light" />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{item.title}</AppText>
                <AppText style={styles.price}>Rs. {item.price}</AppText>

                <View style = {styles.userContainer}>
                    <ListItem title="Zain Munir" subTitle="10 Listing" image={require("../assets/zain.png")}/>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 25
    },
    image: {
        width: "100%",
        height: 250
    },
    listingContainer: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    price: {
        color: colors.primary,
        paddingVertical: 10,
        fontWeight: "bold"
    },
    title: {
        fontWeight: "bold"
    },
    userContainer: {
        marginVertical: 30
    }
})
