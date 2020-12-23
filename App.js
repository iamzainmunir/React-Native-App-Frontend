import React, { useState } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { AppLoading } from "expo"

import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from "./app/auth/context";
import AppNavigator from './app/navigation/AppNavigator';
import authToken from "./app/auth/storage"

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authToken.getUser();
    if(user) setUser(user)
  }

  if(!isReady){
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)}/>
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice/>
    </AuthContext.Provider>
  )

}


