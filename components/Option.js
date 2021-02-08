import StorageTools from "../tools/StorageTools";
import React, { Component, useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    Image,
    TextInput, // 1. <- Add this
    View,
    TouchableOpacity,
    Touchable,
    SafeAreaView,
    BackHandler,
    Button,
} from "react-native";
import {
    ColorPicker,
    TriangleColorPicker,
    toHsv,
    fromHsv,
} from "react-native-color-picker";

const styles = StyleSheet.create({
    Text: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    BottomButton: {
        flex: 0.5,
        alignItems: "center",
        width: 150,
        height: 50,
        borderRadius: 70 / 2,
        alignSelf:"center",
        backgroundColor: "#F1C40F",
        alignContent: "center",
        justifyContent: "center",
        margin: 5
    },
    BottomButtonText:{
        color:"black"
    }
});
export default class Option extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            old_color: toHsv("whtie"),
            color: toHsv("green"),
            colors: [],
        };
        this.onColorChange = this.onColorChange.bind(this);
    }

    str = new StorageTools();

    componentDidMount() {
        this.str.initColorStorage()
        this.str.getObjectData("colorChatStorage").then((colors) => {
            this.setState({ colors });
        });
    }

    onColorChange(color) {
        this.setState({ old_color: this.state.color, color: `${fromHsv(color)}9f` });
    }

    changeColorForChat(index) {
        let size = this.state.colors.length;
        this.setState({
            colors: [
                ...this.state.colors.slice(0, index),
                this.state.color,
                ...this.state.colors.slice(index + 1, size),
            ],
        });
        console.log(this.state.colors);
    }

    resetColor = () => {
        this.str.deleteItem("colorChatStorage")
        this.str.initColorStorage()
    }

    saveColors = () => {
        this.str.storeObjectData(this.state.colors,"colorChatStorage")
    }

    render() {
        return (
            <SafeAreaView
                style={{ flex: 1, padding: 45, backgroundColor: "#212021" }}
            >
                <View style={{ flex: 0.6 }}>
                    <Text style={{ color: "white" }}>
                        React Native Color Picker - Controlled
                    </Text>
                    <TriangleColorPicker
                        color={this.state.color}
                        onColorChange={this.onColorChange}
                        onColorSelected={(color) =>
                            alert(`Color selected: ${color}`)
                        }
                        style={{ flex: 1 }}
                    />
                </View>
                <View style={{ flex: 0.3, flexDirection: "row" }}>
                    <View style={styles.Text}>
                        <Text style={{ color: "white" }}> User 1 </Text>
                        <Text style={{ color: "white" }}> User 2 </Text>
                        <Text style={{ color: "white" }}> User 3 </Text>
                        <Text style={{ color: "white" }}> User 4 </Text>
                        <Text style={{ color: "white" }}> User 5 </Text>
                        <Text style={{ color: "white" }}> User 6 </Text>
                        <Text style={{ color: "white" }}> User 7 </Text>
                    </View>
                    <View style={styles.Text}>
                        { !this.state.isLoading && this.state.colors!==null ? this.state.colors.map((element, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.changeColorForChat(index);
                                    }}
                                >
                                    <Text
                                        key={index}
                                        style={{ color: `${element}` }}
                                    >
                                        {" "}
                                        Color {index + 1}{" "}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }):null}
                    </View>
                </View>
                <View style={{ flex: 0.2, flexDirection: "row" }}>
                    <TouchableOpacity style={styles.BottomButton} onPress={this.saveColors}>
                        <Text style={styles.BottomButtonText}>Enregistrer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BottomButton} onPress={this.resetColor}>
                        <Text style={styles.BottomButtonText}> Couleur par défaut</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
