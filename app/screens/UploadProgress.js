import React from 'react'
import { StyleSheet, View, Modal, Image } from 'react-native'
import * as Progress from "react-native-progress"
import LottieView from "lottie-react-native"

import DoneAnimation from './DoneAnimationScreen'

export default function UploadProgress({ uploadComplete, visible, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {!(uploadComplete) ?
                    <LottieView style={styles.animation}
                        autoPlay
                        loop
                        source={require("../assets/animations/uploading.json")}
                    /> :
                    <DoneAnimation onDone={onDone} uploadComplete={uploadComplete}/>
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
        height: 150
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
