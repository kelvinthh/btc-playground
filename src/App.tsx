import { ImageBackground, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AddressGenerator from './components/AddressGenerator';
import MnemonicGenerator from './components/MnemonicGenerator';

const image = { uri: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg" };

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <View style={{ marginBottom: 50 }}>
            <Text style={styles.titleText}>BitCoin Playground</Text>
            <Text style={{ color: 'white' }}>Created by <b>Kelvin Tam</b> w/ <b>React Native Web</b></Text>
            <Text style={{ color: 'white' }}>https://github.com/kelvinthh/btc-playground</Text>
          </View>
          <MnemonicGenerator />
          <AddressGenerator />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    alignItems: "center",
    justifyContent: 'center'
  },
  titleText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
})
export default App;
