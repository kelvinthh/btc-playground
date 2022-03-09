import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

const image = { uri: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg" };


const App = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.contentText}>BitCoin Playground for {text}</Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={setNumber}
              value={number}
              placeholder="No."
              keyboardType="numeric"
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  content: {
    //textAlign: "center",
    backgroundColor: "#000000c0",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  contentText: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
  },
  input: {
    width: 350,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    
  },
})
export default App;
