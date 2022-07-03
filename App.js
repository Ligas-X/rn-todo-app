import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
