import React, { Component, useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    TextInput, // 1. <- Add this 
    View,
    TouchableOpacity,
    Touchable,
    SafeAreaView,
    BackHandler,
  } from 'react-native';

 export default function Main ({navigation}) {
    // state = { name: '' } // 2. <- Add the component state
    
    const[name, setName]= useState('')


    const onPress = () => {
      navigation.navigate('Chat', {name: name})
    }

      return (
        <SafeAreaView style={{
          backgroundColor: '#F9E79F',
          flex:1
        }          
        }>
          <Text style={styles.title}>Entrez votre Pseudo : </Text>
          <TextInput
            onChangeText={text => setName(text) }
            style={styles.nameInput}
            placeHolder="John Cena"
            value={name}
          />
         <TouchableOpacity onPress={onPress}>
             <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
  }

  const offset = 24;
  const styles = StyleSheet.create({
    nameInput: { // 3. <- Add a style for the input
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1,
    },
    title: {
      marginTop: offset,
      marginLeft: offset,
      fontSize:offset,
    },
    buttonText:{
      marginLeft:offset,
      fontSize:offset
    }
  });