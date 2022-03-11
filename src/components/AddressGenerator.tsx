import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AddressGenerator(){
  return (
    <View>
      <Text>AddressGenerator</Text>
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