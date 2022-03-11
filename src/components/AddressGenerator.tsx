import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import * as Address from "../utils/address"

export default function AddressGenerator() {
  const [mnemonic, setMnemonic] = useState("");
  const [path, setPath] = useState("m/44'/0'/0'/0/0");
  const [resultText, setResultText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const generateAddress = async () => {
    let result = Address.getAddress(mnemonic, path);
    if(result.valid)
    {
      setModalVisible(true);
      setErrorText("");
      var promise = Promise.resolve(result.ret);
      promise.then(val=>setResultText(val?.address));

    }
    else
    {
      setErrorText("Invalid mnemonic words!");
      setMnemonic("");
    }
  }

  return (
    <View style={styles.content}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <Text style={styles.contentText}>Here's your address:</Text>
          <Text style={styles.resultText}>{resultText}</Text>
          <Pressable onPress={() => {
            setModalVisible(false);
            setResultText("15");
          }}>
            <Text style={[styles.buttonText, { marginVertical: 10 }]}>OK!</Text>
          </Pressable>
        </View>
      </Modal>

      <Text>AddressGenerator</Text>
      <Text style={styles.contentText}>Address Generator</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMnemonic}
        value={mnemonic}
        placeholder="Enter mnemonic words here"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPath}
        value={path}
        placeholder="Enter path here."
      />
      <Pressable onPress={generateAddress}>
        <Text style={styles.buttonText}>Generate!</Text>
      </Pressable>
      <Text style={styles.errorText}>{errorText}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  content: {
    //textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000000a0",
    width: 450,
    paddingVertical: 50,
    marginBottom: 15,
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
    marginTop: 5,
    textAlign: "center",
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: "bold",
    color: 'yellow'
  },
  errorText: {
    marginTop: 5,
    textAlign: "center",
    flexWrap: 'wrap',
    color: 'red'
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
  modal: {
    backgroundColor: "#000000e0",
    borderColor: 'white',
    borderWidth: 5,
    width: "100%",
    height: "100%",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    flexDirection: 'column',
    textAlign: "center"
  }
})
