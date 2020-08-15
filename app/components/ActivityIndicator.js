import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import colors from "../config/colors"

export default function LoadingAnimation({ visible }) {
    if (!visible) return null;

    return <View style={styles.container}>
        <ActivityIndicator animating={visible} size="large" color={colors.primary} />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})