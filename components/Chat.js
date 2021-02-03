import React, { Component, useState, useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from './Fire';

export default function Chat({route}) {
    
    const navigationOptions = ({route}) => ({
        title: (route.params || {}).name || 'Chat!', 
    })
    
    const [messages, setMessages] = useState([])
    
    const user = {name:route.params.name,
                _id: Fire.shared.uid,}
        
    

    
    
    
    useEffect(() => {
        Fire.shared.on(message => {
            this.setState(previousState => ({
                messages:GiftedChat.append(previousState.messages, message)
            }))
        })
        return () => {
            Fire.shared.off()
        }
    })
    return(
        <GiftedChat
        messages={messages}
        onSend={Fire.shared.send}
        user={user} />
        ) 
        
}


const styles = StyleSheet.create({});
