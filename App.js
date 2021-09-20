import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";


const fetchFonts = () => {
  return Font.loadAsync({
    "gotham-bold": require("./assets/fonts/Gotham-Bold.otf"),
    "gotham-book": require("./assets/fonts/GothamBook.ttf"),
    "gotham-medium" : require('./assets/fonts/GothamMedium.ttf')
  });
};


export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header ></Header>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    paddingTop: 30,
    backgroundColor:"#000",
    

  },
  
});
