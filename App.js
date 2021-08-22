import { StatusBar } from "expo-status-bar";
import React from "react";

import * as firebase from "firebase";

const firebaseConfig = {
  //all keys
};

//to prevent initilizing when there is already an firebase instance otherwise it will crash the app.
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
