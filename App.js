/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/

//import "./App.scss";
import { StyleSheet, Text, View } from "react-native";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-native-gesture-handler";

//import { UserRoutes } from "./utils/";

// Components
//import { ProtectedRoute, UnprotectedRoute } from "./components";

// Views
//import {
//Test,
//SignUp,
//Login,
//HomePassenger,
//Profile,
//PageNotFound,
//HomeDriver,
//Record,
//} from "/views";

import Login from "./views/Login";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      <Text>holaaaaa</Text>
    </View>
  );
}

export default App;
