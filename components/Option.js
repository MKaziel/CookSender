import StorageTools from "../tools/StorageTools"
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
    fromHsv
} from "react-native-color-picker";

const styles = StyleSheet.create({
    Text: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default class Option extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { old_color: toHsv("whtie"), color: toHsv("green"), colors: [] };
        this.onColorChange = this.onColorChange.bind(this);
    }

    str = new StorageTools();

    componentDidMount() {        
        if(this.str.initColorStorage()){
            console.log("initialisation des couleurs faite");
        } else {
            console.log("l'alimentation était déjà faite");
        }
        this.str.getColorsChatData().then((colors)=>{
            this.setState({colors}) 
        })
    }

    onColorChange(color) {
        // console.log(StorageTools.getObjectData("colorChatStorage"));
        this.setState({ old_color: this.state.color, color: color });

    }

    render() {
        return (
            <SafeAreaView
                style={{ flex: 1, padding: 45, backgroundColor: "#212021" }}
            >
                <Text style={{ color: "white" }}>
                    React Native Color Picker - Controlled
                </Text>
                <TriangleColorPicker
                    color={this.state.color}
                    onColorChange={this.onColorChange}
                    onColorSelected={(color) =>
                        alert(`Color selected: ${color}`)
                    }
                    style={{ flex: 0.5 }}
                />
                <View style={{flex: 1, flexDirection: 'row'}}>
                    
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
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}> Color 1 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}> Color 2 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}> Color 3 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}> Color 4 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}> Color 5 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}> Color 6 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}> Color 7 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
