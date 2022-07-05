import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const pressHandler = () => {
    onSubmit("Test todo");
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} />
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <Text style={styles.buttonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  textInput: {
    width: "60%",
    padding: 10,
    borderStyle: "solid",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: "#0C69F3",
    width: 120,
    padding: 10,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
