import React from "react"
import {Login} from "./src/screens/Login"
import { LoginComSenha } from "./src/screens/Login2"
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./src/screens/Home"
import { Profile } from "./src/screens/Profile";
import { ModalProfile } from "./src/components/ModalProfile/ModalProfile";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }}  name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="LoginComSenha" component={LoginComSenha} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      <Stack.Screen options={{ headerShown: false }} name="Modal" component={ModalProfile} />

    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}