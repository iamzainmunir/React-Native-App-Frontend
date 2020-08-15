import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"

export default function ImageScreen() {
    return (
        <View style = {styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white"/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="white"/>
            </View>
            <Image style = {styles.image} resizeMode="contain" source={require("../assets/table.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
