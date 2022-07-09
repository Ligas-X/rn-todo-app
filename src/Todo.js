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
        console.log(
          "Pressed Todo with ID -",
          todoParam.id,
          "and Title -",
          todoParam.title
        );
        navigation.navigate("EditTodo", todoParam, onRemove);
      }}
      onLongPress={() => {
        Alert.alert(
          "Удаление задачи",
          "Вы точно хотите удалить данную задачу?",
          [
            {
              text: "Отмена",
              style: "cancel",
            },
            {
              text: "Да",
              onPress: () => longPressHandler(),
            },
          ]
        );
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
