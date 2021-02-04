import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './components/Main';
import Chat from './components/Chat';

const navigator = createStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      
      <navigator.Navigator>
        <navigator.Screen name="Main" component={Main}/>
        <navigator.Screen name="Chat" component={Chat} styles={{flex:1}} />

          
      </navigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
