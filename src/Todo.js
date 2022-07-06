import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export const Todo = ({ todoParam, onRemove }) => {
  const longPressHandler = () => {
    onRemove(todoParam.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log("Pressed: ", todoParam.id)}
      onLongPress={() => {
        Alert.alert("Удаление задачи", "Вы точно хотите удалить задачу?", [
          {
            text: "Отмена",
            style: "cancel",
          },
          {
            text: "Да",
            onPress: () => longPressHandler(),
          },
        ]);
      }}
    >
      <View style={styles.todoElement}>
        <Text>{todoParam.title}</Text>
      </View>
    </TouchableOpacity>
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
