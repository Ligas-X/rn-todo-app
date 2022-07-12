import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

export const Todo = ({ todoParam, onRemove, navigation }) => {
  const [isChecked, setChecked] = useState(false);

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
        <Text numberOfLines={1}>{todoParam.title}</Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#0C69F3" : undefined}
        />
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
  checkbox: {
    position: "absolute",
    right: 0,
    marginHorizontal: 12,
  },
});
