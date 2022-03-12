import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { getSegwit } from '../utils/address';

export default function SegWitAddressGenerator() {
  const [mnemonic, setMnemonic] = useState("");
  const [path, setPath] = useState("");
  const [resultText, setResultText] = useState<string | undefined>("");
  const [errorText, setErrorText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const generateAddress = async () => {

    try {
      let result = getSegwit(mnemonic, (path === "" ? "m/44'/0'/0'/0/0" : path));
      if (result.valid) {
        setModalVisible(true);
        setErrorText("");
        var promise = Promise.resolve(result.data);
        promise.then(val => setResultText(val?.address));

      }
      else {
        setErrorText("Invalid mnemonic words!");
        setMnemonic("");
      }
    } catch (error) {
      setErrorText(String(error));
      console.log(error);
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
          <Text style={styles.contentText}>Wallet address generated:</Text>
          <Text style={styles.resultText}>{resultText}</Text>
          <Pressable onPress={() => {
            setModalVisible(false);
            setResultText("15");
          }}>
            <Text style={[styles.buttonText, { marginVertical: 10 }]}>OK!</Text>
          </Pressable>
        </View>
      </Modal>

      <Text style={styles.contentText}>SegWit Address Generator</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMnemonic}
        value={mnemonic}
        placeholder="Enter mnemonic words"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPath}
        value={path}
        placeholder="Enter path (Default: m/44'/0'/0'/0/0)"
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
    width: 450,
    marginTop: 30,
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
