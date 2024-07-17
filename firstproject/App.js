import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World com o React Native</Text>
      <Text>O React Native é um conjunto de códigos JavaScript</Text>
      <Text>Quais são as ferramentas que iremos utilizar:</Text>
      <Text>VSCode - Editor de texto, \n  Expo - Compilador  /n & Node  Funciona como uma base para  executar o Expo. </Text> 
      <Text>Criando um aplicativo:</Text> 
      <Text>npx create-expo-app MeuProjeto --template expo-template-blank@sdk-50</Text> 
    <Text>npm install expo@latest</Text>
    <Text>npx expo install --fix</Text>
    <Text> npx expo start</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
