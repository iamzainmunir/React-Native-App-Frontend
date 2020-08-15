import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function PostItemButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.postButton}>
                <MaterialCommunityIcons MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postButton: {
        backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        bottom: 20,
        borderColor: colors.white,
        borderWidth: 10
    }
})
