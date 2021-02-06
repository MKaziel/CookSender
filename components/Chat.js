import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, Day, Time } from 'react-native-gifted-chat'
import Fire from './Fire';
import {AntDesign} from "@expo/vector-icons";


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
              parsePatterns={linkStyle => [
                 { pattern: /#(\w+)/,
                    style: { ...linkStyle, color: 'purple' },
                    onPress: props => console.warn(props),
                 },
              ]}
              messages={this.state.messages}
              onSend={Fire.send} 
              user={this.user} 
              alwaysShowSend={false}
              isTyping={false}
              loadEarlier={true}
              showUserAvatar={false}
              showAvatarForEveryMessageue={true}
              multiline={true}
              // renderMessage={this.renderBubble}
              />    
              
          </SafeAreaView>
      )
  }
}


const styles = StyleSheet.create({});
