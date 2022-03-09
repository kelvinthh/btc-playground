import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>This is running via React Native Web!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  }
})
export default App;
