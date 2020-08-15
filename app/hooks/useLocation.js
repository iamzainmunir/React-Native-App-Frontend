import { useState, useEffect } from "react"
import * as Location from "expo-location";

export default useLocation = () => {
    try {
        const [location, setLocation] = useState();

        useEffect(() => {
            fetchUserLocation()
        }, [])

        const fetchUserLocation = async () => {
            try {
                const { granted } = await Location.requestPermissionsAsync();
                if (!granted) return;

                const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
                setLocation({ latitude, longitude });
            } catch (error) {
                console.log("Error fetching location", error)
            }
        }

        return location;
    } catch (error) {
        console.log("Error in useLocation hook",error)
    }
}