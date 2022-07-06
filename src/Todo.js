import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export const Todo = ({ todoParam, onRemove, navigation }) => {
  const longPressHandler = () => {
    onRemove(todoParam.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        console.log("Pressed: ", todoParam.id);
        navigation.navigate("EditTodo", todoParam);
      }}
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
    backgroundColor: "#ebebeb",
    borderColor: "#cacaca",
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    margin: 4,
  },
});
