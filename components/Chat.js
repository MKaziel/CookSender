import React, { Component, useState, useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Pressable, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from './Fire';

// export default function Chat({route}) {
    
//     const navigationOptions = ({route}) => ({
//         title: (route.params || {}).name || 'Chat!', 
//     })
    
//     const [messages, setMessages] = useState([])
    
//     const user = {name:route.params.name,
//                 _id: Fire.uid,}
        

    
//     useEffect(() => {
//         // Fire.shared.on(message => {
//         //     this.setState(previousState => ({
//         //         messages:GiftedChat.append(previousState.messages, message)
//         //     }))
//         // })
//         // return () => {
//         //     Fire.shared.off()
//         // }
//         Fire.get(message => setMessages(previous => ({
//             messages: GiftedChat.append(previous.message, message)
//         }))
//         )
//         console.log("OKBONJOUR")
//         return () => {
//             Fire.off()
//         }
//     })
//     return(
//         <GiftedChat
//         //messages={messages}
//         onSend={Fire.send}
//         user={user} />
//         ) 
        
// }

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
            messages: GiftedChat.append(previous.message, message)
            }))
            )
    }

    componentWillUnmount(){
        Fire.off()
    }

    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <GiftedChat 
                messages={this.state.messages}
                onSend={Fire.send} 
                user={this.user} />    
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({});
