import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from './Icon'
import AppText from './AppText'

export default function CategoryPickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})
