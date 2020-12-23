import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from "expo-constants"
import { useNetInfo } from "@react-native-community/netinfo"

import AppText from './AppText'
import colors from '../config/colors'


export default function OfflineNotice() {
    const netInfo = useNetInfo();

    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false){
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        )
    }
    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        position: "absolute",
        top: Constants.statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: "100%",
        zIndex: 1,
    },
    text: {
        color: colors.white
    }
})
