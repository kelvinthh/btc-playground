import { randomBytes } from 'crypto';
import React, { useRef, useState } from 'react';
import { Button, ImageBackground, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Generator from "./utils/generator"
const image = { uri: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg" };
let invalidInput = false;

const App = () => {
  const [wordCount, setWordCount] = useState("");
  const [resultText, setResultText] = useState("");
  
  const getWordCount = () => {
    if (
      wordCount === "12" ||
      wordCount === "15" ||
      wordCount === "18" ||
      wordCount === "21" ||
      wordCount === "24") {
        invalidInput = false;
        const randomBytes = Generator.getRandomBytes(wordCount);
        const initEntropy = Generator.getInitEntropy(randomBytes);
        const hash = Generator.getHash(initEntropy);
        setResultText(hash);
        // setResultText("The random byte is " + randomBytes + 
        // "\nInitial Entropy is " + Generator.getInitEntropy(randomBytes));
    }
    else
    {
      invalidInput = true;
      setResultText("Invalid input. Must be either 12, 15, 18, 21, or 24!");
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.contentText}>BitCoin Playground</Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setWordCount}
              value={wordCount}
              placeholder="Word Count (Enter either 12, 15, 18, 21, or 24)"
              keyboardType="numeric"
            />
          </View>
          <Pressable onPress={getWordCount}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Text style={[styles.resultText, {color: invalidInput?"red":"white"}]}>{resultText}</Text>
          
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
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contentText: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultText:{
    marginVertical: 5,
    textAlign: "center",
    flexWrap: 'wrap'
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
