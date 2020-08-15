import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import defaultStyles from "../config/styles"

export default function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity onPress={onPress} style = {[styles.appButton, {backgroundColor: defaultStyles.colors[color]}]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButton: {
        width: "100%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginVertical: 10
    },
    text: {
        textTransform: "uppercase",
        fontSize: 15,
        fontWeight: "bold",
        color: defaultStyles.colors.white
    }
})
