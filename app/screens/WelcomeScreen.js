import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

import AppButton from "../components/AppButton"
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground blurRadius={2} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style= {styles.logo} source={require("../assets/logo.png")}/>
                <Text style = {styles.tagLine}> Sell Everything You Don't Need !</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
                <AppButton title="Register" onPress={() => navigation.navigate(routes.REGISTER)} color="secondary"/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        width: "100%",
        padding: 10,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagLine: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10
    }
})

