import { View, Text, KeyboardAvoidingView, ImageBackground, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as Mnemonic from "../utils/mnemonic"

let invalidInput = false;


export default function MnemonicGenerator() {
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
      setResultText(Mnemonic.generateMnemonic(wordCount));
    }
    else {
      invalidInput = true;
      setResultText("Invalid input. Must be either 12, 15, 18, 21, or 24!");
    }
  }
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>Mnemonic Words Generator</Text>
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
        <Text style={styles.buttonText}>Generate!</Text>
      </Pressable>
      <Text style={[styles.resultText, { color: invalidInput ? "red" : "white" }]}>{resultText}</Text>
    </View>
  )
}
const shawdows = {
  shadowOpacity: 0.5,
  shadowRadius: 10,
}
const styles = StyleSheet.create({
  content: {
    //textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000000a0",
    width: '50%',
    paddingVertical: 50,
    borderRadius: 15
  },
  contentText: {
    color: "white",
    fontSize: 24,
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
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  resultText: {
    marginVertical: 5,
    textAlign: "center",
    flexWrap: 'wrap'
  },
  input: {
    width: 315,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'white',
    shadowOpacity: 0.5,
    shadowRadius: 10,

  },
})