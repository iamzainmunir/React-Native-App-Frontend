import React from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import * as Progress from "react-native-progress"
import LottieView  from "lottie-react-native"

import AppText from '../components/AppText'
import colors from '../config/colors'

export default function UploadProgress({progress, visible, onDone}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? <Progress.Bar progress={progress} color={colors.primary} width={200}/> : 
                <LottieView style={styles.animation} 
                    onAnimationFinish={onDone} 
                    autoPlay 
                    loop={false}
                    source={require("../assets/animations/done.json")}/>
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    animation: {
        width: 250,
        height: 250
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
