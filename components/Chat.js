import React, { Component, useState, useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, Day, Time } from 'react-native-gifted-chat'
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
            messages: GiftedChat.append(previous.messages, message)
            }))
            )
    }

    componentWillUnmount(){
        Fire.off()
    }

    // render(){
    //   const chat =  <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />
    //   if(Platform.OS === "android"){
    //     return (
    //       <KeyboardAvoidingView style={{ flex: 1}} behavior="padding" keyboardVerticalOffset={30} enabled>
    //         {chat} 
    //       </KeyboardAvoidingView>
    //     );
    //   }
    //   return <SafeAreaView style={{ felx: 1}}> {chat} </SafeAreaView>;
    // }




    render(){
        console.log(this.state.messages)
        return (
            <SafeAreaView style={{flex:1, backgroundColor: '#F9E79F'}}>
                <GiftedChat 
                messages={this.state.messages}
                onSend={Fire.send} 
                user={this.user} 
                alwaysShowSend={false}
                isTyping={false}
                loadEarlier={true}
                showUserAvatar={false}
                showAvatarForEveryMessageue={true}
                renderMessage={this.renderBubble}
                />    
                
            </SafeAreaView>
        )
    }

    // renderBubble = props => {
    //     let username = props.currentMessage.user.name
    //     let color = this.getColor(username)
    
    //     return (
    //       <Bubble
    //         {...props}
    //         textStyle={{
    //           right: {
    //             color: 'white'
    //           }
    //         }}
    //         wrapperStyle={{
    //           left: {
    //             backgroundColor: color,}
    //         }}
    //       />
    //     )
    //   }
    
    //   getColor(username){
    //     let sumChars = 0;
    //     for(let i = 0;i < username.length;i++){
    //       sumChars += username.charCodeAt(i);
    //     }
    
    //     const colors = [
    //         '#e67e229f', // carrot
    //         '#2ecc719f', // emerald
    //         '#3498db9f', // peter river
    //         '#8e44ad9f', // wisteria
    //         '#e74c3c9f', // alizarin
    //         '#1abc9c9f', // turquoise
    //       '#2c3e509f', // midnight blue
    //     ];
    //     return colors[sumChars % colors.length];
    //   }
}


const styles = StyleSheet.create({});
