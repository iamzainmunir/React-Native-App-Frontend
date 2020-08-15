import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from "yup"

import Screen from "../components/Screen";
import { AppForm, AppFormField, FormSubmitButton } from "../components/forms"

const loginValidationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).max(20).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(40).label("Password")
})

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={loginValidationSchema}
            >
                <AppFormField
                    icon="account"
                    name="name"
                    placeholder="Name"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <FormSubmitButton title="Register" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})
