import React, { useState, useContext } from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from "yup"

import Screen from "../components/Screen";
import { AppForm, AppFormField, FormSubmitButton, AppErrorMessage } from "../components/forms"
import authApi from "../api/authorization";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage"
import useAuth from '../auth/useAuth';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(40).label("Password")
})

export default function LoginScreen() {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const response = await authApi.login(email, password);
        if(!response.ok) return setLoginFailed(true);
        
        setLoginFailed(false);
        auth.logIn(response.data.token);
       
    }

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={loginValidationSchema}
            >
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
                <AppErrorMessage error="Invalid email and/or password" visible={loginFailed}/>
                <FormSubmitButton title="Log In" />
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
