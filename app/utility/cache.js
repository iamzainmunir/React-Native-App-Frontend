import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const PREFIX = "cache-";
const EXPIRE_IN_MINUTE = 5;

const store = async(key, value) => {
    try {
        const item = {
            value,
            timeStamp: Date.now()
        }

        await AsyncStorage.setItem(PREFIX + key, JSON.stringify(item));

    } catch (error) {
        console.log(error)
    }
}

const get = async(key) => {
    try {
        const value = await AsyncStorage.getItem(PREFIX + key);
        const item = JSON.parse(value)

        if(!item) return null;

        if(isExpired(item)){
            await AsyncStorage.removeItem(PREFIX + key);
            return null;
        }

        return item.value;

    } catch (error) {
        console.log(error)
    }
}

const isExpired = (item) => {
    const now = moment(Date.now());
    const itemTimeStamp = moment(item.timeStamp);

    return now.diff(itemTimeStamp, "minutes") > EXPIRE_IN_MINUTE;
}

export default {
    store,
    get
}