import * as SecureStore from 'expo-secure-store';
import jwtDecode from "jwt-decode"

const KEY = "auth-token";

const storeToken = async (token) => {
    try {
        await SecureStore.setItemAsync(KEY, token)
    } catch (error) {
        console.log("Error storing token", error)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(KEY)
    } catch (error) {
        console.log("Error fetching token", error)
    }
}

const getUser = async () => {
    try {
        const token = await getToken();
        return token ? jwtDecode(token) : null
    } catch (error) {
        console.log("Error fetching token", error)
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(KEY)
    } catch (error) {
        console.log("Error removing token", error)
    }
}

export default {
    getToken,
    getUser,
    removeToken,
    storeToken
}