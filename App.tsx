import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import store from "./Redux/store";
import HotUpdates from "./screens/HotUpdates";
import Filter from "./screens/Filter";
import NewsDetails from "./screens/NewsDetails";
import Homepage from "./screens/Homepage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "white",
            },

            headerTintColor: "red", // Customize header text color
            headerTitleAlign: "center", // Center-align header title
          }}
        >
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="NewsDetails" component={NewsDetails} />

          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen
            name="HotUpdates"
            component={HotUpdates}
            options={{ title: "HotUpdates" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
