import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import LottieView from "lottie-react-native"

import colors from "../config/colors"

export default function LoadingAnimation({ visible = false }) {
    if (!visible) return null;

    return <View style={styles.container}>
        {/* <ActivityIndicator animating={visible} size="large" color={colors.primary} /> */}
        <LottieView
            autoPlay
            loop
            source={require("../assets/animations/loader2.json")}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})