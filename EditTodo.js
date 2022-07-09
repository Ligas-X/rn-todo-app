import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Alert,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function EditTodo({ navigation, route }) {
  var todoTitle = route.params.title;
  var todoId = route.params.id;

  const [text, setText] = useState(todoTitle);

  const pressDeleteHandler = () => {
    route.params.onRemove(route.params.id);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text style={styles.text}>ID of todo: {route.params.id}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          multiline={true}
          numberOfLines={10}
        />
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert(
                "Обновление задачи",
                "Вы точно хотите обновить текст данной задачи?",
                [
                  {
                    text: "Отмена",
                    style: "cancel",
                  },
                  {
                    text: "Да",
                    onPress: () => {
                      navigation.navigate({
                        name: "Main",
                        params: { id: todoId, text: text },
                        merge: true,
                      });
                    },
                  },
                ]
              );
            }}
          >
            <Text style={styles.buttonText}>Обновить</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
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
                    onPress: () => {
                      navigation.navigate({
                        name: "Main",
                        params: { todoIdToDelete: todoId },
                        merge: true,
                      });
                    },
                  },
                ]
              );
            }}
          >
            <Text style={styles.buttonText}>Удалить</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: "flex-start",
  },
  text: {
    height: 40,
    backgroundColor: "#ebebeb",
    borderColor: "#cacaca",
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginBottom: 24,
  },
  textInput: {
    minHeight: "75%",
    backgroundColor: "#ebebeb",
    borderColor: "#cacaca",
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginBottom: 24,
    textAlignVertical: "top",
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0C69F3",
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "white",
    marginHorizontal: "2%",
    marginBottom: 12,
    minWidth: "46%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonsView: {
    flexDirection: "row",
  },
});
