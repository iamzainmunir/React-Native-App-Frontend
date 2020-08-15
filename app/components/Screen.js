import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Constansts from "expo-constants"

export default function Screen({ children, style }) {
    return <SafeAreaView style={[styles.screen, style]}>{ children }</SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constansts.statusBarHeight,
        flex: 1
    }
})
