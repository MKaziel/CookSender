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

export default class Option extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { old_color: toHsv("whtie"), color: toHsv("green") };
        this.onColorChange = this.onColorChange.bind(this);
    }

    componentDidMount() {}

    onColorChange(color) {
        console.log(this.state.color);
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
                <View>
                    <Text style={{ color: "white" }}> Color 1 </Text>
                    <TouchableOpacity>
                        <Text style={{color : fromHsv(this.state.color)}}>test</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: "white" }}> Color 2 </Text>
                </View>
                <View>
                    <Text style={{ color: "white" }}> Color 3 </Text>
                </View>
                <View>
                    <Text style={{ color: "white" }}> Color 4 </Text>
                </View>
                <View>
                    <Text style={{ color: "white" }}> Color 5 </Text>
                </View>
                <View>
                    <Text style={{ color: "white" }}> Color 6 </Text>
                </View>
                <View>
                    <Text style={{ color: "white" }}> Color 7 </Text>
                </View>
                <View>
                    <Text style={{ color: "white" }}> Color 8 </Text>
                </View>
            </SafeAreaView>
        );
    }
}
