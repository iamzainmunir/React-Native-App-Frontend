import React from 'react'
import { StyleSheet, View, Modal, Image } from 'react-native'
import LottieView from "lottie-react-native"

export default function DoneAnimation({ uploadComplete, onDone }) {
    if (!(uploadComplete)) return null;
    return (
        <LottieView style={styles.animation}
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            source={require("../assets/animations/done.json")}
        />
    )
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
        height: 150
    }
})
