import React, { Component, useState, useEffect } from "react";
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { GiftedChat, Bubble, Day, Time } from "react-native-gifted-chat";
import Fire from "./Fire";
import StorageTools from "../tools/StorageTools";

export default class Chat extends React.Component {
    state = {
        messages: [],
        colors: [],
    };

    str = new StorageTools();

    get user() {
        return {
            _id: Fire.uid,
            name: this.props.route.params.name,
        };
    }

    componentDidMount() {
        Fire.get((message) =>
            this.setState((previous) => ({
                messages: GiftedChat.append(previous.messages, message),
            }))
        );
        this.str.initColorStorage();
        this.str.getObjectData("colorChatStorage").then((colors) => {
            this.setState({ colors });
        });
    }

    componentWillUnmount() {
        Fire.off();
    }

    renderBubble = props => {
        let username = props.currentMessage.user.name
        let color = this.getColor(username)

        return (
            <Bubble
                {...props}
                textStyle={{
                    right: {
                        color: 'white',

                    }
                }}
                wrapperStyle={{
                    left: {
                        backgroundColor: color,
                        marginLeft: 5,
                        marginVertical: 5
                    },
                }}
            />
        )
    }

    getColor(username) {
        let sumChars = 0;
        for (let i = 0; i < username.length; i++) {
            sumChars += username.charCodeAt(i);
        }
        const colors = this.state.colors;
        return colors[sumChars % colors.length];
    }

    render() {
        console.log(this.state.messages)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F9E79F' }}>
                <GiftedChat
                    parsePatterns={linkStyle => [
                        {
                            pattern: /#(\w+)/,
                            style: { ...linkStyle, color: 'purple' },
                            onPress: props => console.warn(props),
                        },
                    ]}
                    messages={this.state.messages}
                    onSend={Fire.send}
                    user={this.user}
                    alwaysShowSend={false}
                    loadEarlier={true}
                    renderMessage={this.renderBubble}
                    showUserAvatar={true}
                    showAvatarForEveryMessageue={true}
                />

            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({});
