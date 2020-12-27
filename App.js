import "react-native-gesture-handler";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "mobx-react";
import Store from "./Screens/Stores/ItemStore";
import OnBoarding from "./Screens/OnBoarding";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import Header from "./Screens/Components/Header";
import Home from "./Screens/Home";
import Shop from "./Screens/Shop";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Provider Store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTransparent: true,
              headerLeft: false,
              headerTitle: () => (
                <Header title="Home" titleColor="#2B88C9" menu={true} />
              ),
            }}
          />
          <Stack.Screen
            name="Shop"
            component={Shop}
            options={{
              headerTransparent: true,
              headerLeft: false,
              headerTitle: () => <Header title="Shop" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
