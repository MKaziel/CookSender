import React, { useState } from 'react';
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
} from 'react-native';

export default function Main({ navigation }) {
  // state = { name: '' } // 2. <- Add the component state

  const [name, setName] = useState('')


  const onPress = () => {
    navigation.navigate('Chat', { name: name })
  }

  return (
    <SafeAreaView style={{
      backgroundColor: '#F9E79F',
      flex: 1
    }
    }>
      <View style={{ marginTop: 100 }}>
        <Image
          source={require("../assets/cooksender_title.png")}
          style={{ width: 250, height: 250, alignSelf: "center", marginTop: -150 }} />
      </View>
      <View style={{ marginHorizontal: 32 }}>
        <Text style={styles.title}>Entrez votre Pseudo : </Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <TouchableOpacity style={styles.continue} onPress={onPress}>
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
    borderRadius: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#514E5A",
    marginTop: -80,
    // marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  continue: {
    width: 150,
    height: 50,
    borderRadius: 70 / 2,
    alignSelf: "center",
    backgroundColor: "#F1C40F",
    alignContent: "center",
    justifyContent: "center",
  }
});








