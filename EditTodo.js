import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native";

export default function EditTodo({ navigation, route }) {
  var todoTitle = route.params.title;
  const [text, setText] = useState(todoTitle);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text style={styles.text}>ID of todo: {route.params.id}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "flex-start",
  },
  text: {
    height: 40,
    backgroundColor: "#ebebeb",
    borderColor: "#cacaca",
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
  },
  textInput: {
    height: 300,
    backgroundColor: "#ebebeb",
    borderColor: "#cacaca",
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
});
