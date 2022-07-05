import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Todo = ({ todoParam }) => {
  return (
    <View style={styles.todoElement}>
      <Text>{todoParam.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoElement: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    margin: 4,
  },
});
