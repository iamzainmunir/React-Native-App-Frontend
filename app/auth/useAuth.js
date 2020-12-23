import { useContext } from 'react';
import jwtDecode from "jwt-decode"


import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = async (token) => {
        const user = jwtDecode(token);
        setUser(user);
        await authStorage.storeToken(token)
    }

    const logOut = async () => {
        setUser(null);
        await authStorage.removeToken();
    }


    return { user, setUser, logIn, logOut }

}
