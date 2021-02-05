import React, { Component, useState, useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, Day, Time } from 'react-native-gifted-chat'
import Fire from './Fire';

export default class Chat extends React.Component {

    state = {
        messages: []
    }

    get user(){
        return {
            _id: Fire.uid,
            name: this.props.route.params.name
        }
    }

    componentDidMount(){
        Fire.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
            }))
            )
    }

    componentWillUnmount(){
        Fire.off()
    }





    render(){
        console.log(this.state.messages)
        return (
            <SafeAreaView style={{flex:1, backgroundColor: '#F9E79F'}}>
                <GiftedChat 
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
                marginVertical: 5},
            }}
          />
        )
      }
    
      getColor(username){
        let sumChars = 0;
        for(let i = 0;i < username.length;i++){
          sumChars += username.charCodeAt(i);
        }
    
        const colors = [
            '#e67e229f', // carrot
            '#2ecc719f', // emerald
            '#3498db9f', // peter river
            '#8e44ad9f', // wisteria
            '#e74c3c9f', // alizarin
            '#1abc9c9f', // turquoise
          '#2c3e509f', // midnight blue
        ];
        return colors[sumChars % colors.length];
      }
}


const styles = StyleSheet.create({});
