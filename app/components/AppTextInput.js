import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style = {styles.icon} name={icon} size={25} color={defaultStyles.colors.medium}/>}
            <TextInput style={defaultStyles.text} placeholderTextColor={defaultStyles.colors.medium} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        borderRadius: 25,
        padding: 15,
        backgroundColor: defaultStyles.colors.light,
        marginVertical: 10
    }, 
    icon: {
        marginRight: 10
    }
})
