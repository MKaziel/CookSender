import React, { Component, useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    Image,
    TextInput, 
    View,
    TouchableOpacity,
    Touchable,
    SafeAreaView,
    BackHandler,
  } from 'react-native';
  import {CONFIG_SERVEUR} from '../config'

 export default function Main ({navigation}) {

    const[name, setName]= useState('')


    const onPress = () => {
      navigation.navigate('Chat', {name: name})
    }

    const onPressOption = () => {
      navigation.navigate('Option', {name: name})
    }

      return (
        <SafeAreaView style={{
          backgroundColor: '#F9E79F',
          flex:1
        }          
        }>
           <View style={{ marginTop: 100, }}>
        <Image
          source={require("../assets/cooksender_title.png")}
          style={{ width: 350, height: 300, alignSelf: "center", marginTop: -150 }} />
      </View>
          <View style={{marginHorizontal: 32}}>
          <Text style={styles.title}>Entrez votre Pseudo : </Text>
          <TextInput
            style={styles.nameInput}
            placeHolder="John Cena"
            onChangeText={text => setName(text) }
            value={name}
          />
          </View>
         <TouchableOpacity style={styles.continue} onPress={onPress}>
             <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continue} onPress={onPressOption}>
             <Text style={styles.buttonText}>Option</Text>
             {/* <AntDesign name="arrowright" size={24} color="black" style={{alignSelf: "center"}} /> */}
          </TouchableOpacity>
        </SafeAreaView>
      );
  }

  const offset = 24;
  const styles = StyleSheet.create({
    nameInput: { 
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1,
      borderRadius: 30,
      alignSelf: "center",
      width: 300
    },
    title: {
      fontWeight: "bold",
      fontSize: 30,
      color: "#514E5A",
      marginTop: -80,
      // marginTop: offset,
      marginLeft: offset,
      fontSize:offset,
      alignSelf: "center"
    },
    buttonText:{
     alignSelf: "center",
     fontSize: 20, 
     fontWeight: "bold"
  },
   continue:{
      width: 150,
      height: 50,
      borderRadius: 70 / 2,
      alignSelf:"center",
      backgroundColor: "#F1C40F",
      alignContent: "center",
      justifyContent: "center",
      marginBottom: 10
    }
  });


   
    




