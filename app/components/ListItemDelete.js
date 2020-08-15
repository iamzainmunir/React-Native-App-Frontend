import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListItemDelete({ onPress }) {
    return (
            <View style={styles.swipe}>
                <TouchableWithoutFeedback onPress={onPress}>
                        <MaterialCommunityIcons name="trash-can" color={colors.white} size={35}/>
                </TouchableWithoutFeedback>
            </View>
    )
}

const styles = StyleSheet.create({
    swipe: {
        width: 70,
        backgroundColor: colors.danger,
        justifyContent: "center",
        alignItems: "center"
    }
})
