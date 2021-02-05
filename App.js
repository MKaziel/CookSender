import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./components/Main";
import Chat from "./components/Chat";
import Option from "./components/Option";
import ChangeColor from "./components/OptionComponent/ChangeColor";
import { Ionicons, Entypo } from "@expo/vector-icons";

const navigator = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <navigator.Navigator>
                <navigator.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: "Acceuil",
                        headerStyle: { backgroundColor: "#F1C40F" },
                    }}
                />
                <navigator.Screen
                    name="Chat"
                    component={Chat}
                    styles={{ flex: 1 }}
                    options={{ headerStyle: { backgroundColor: "#F1C40F" } }}
                />
                <navigator.Screen
                    name="Option"
                    component={Option}
                    styles={{ flex: 1 }}
                    options={{ headerStyle: { backgroundColor: "#F1C40F" } }}
                />
                <navigator.Screen
                    name="ChangeColor"
                    component={ChangeColor}
                    styles={{ flex: 1 }}
                    options={{ headerStyle: { backgroundColor: "#F1C40F" } }}
                />
            </navigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1C40F",
        alignItems: "center",
        justifyContent: "center",
    },
});
