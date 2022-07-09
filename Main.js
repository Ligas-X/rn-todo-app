import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function Main({ navigation, route }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "Купить хлеб" },
    { id: 2, title: "Купить молоко" },
    { id: 3, title: "Купить масло" },
    { id: 4, title: "Купить бананы" },
    { id: 5, title: "Купить яблоки" },
    { id: 6, title: "Купить мандарины" },
    { id: 7, title: "Купить ананасовый сок" },
    { id: 8, title: "Купить картошку" },
    { id: 9, title: "Купить гречку" },
    { id: 10, title: "Купить рис" },
  ]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (todoId, updatedTitle) => {
    const newTodo = todos.map((object) => {
      if (object.id === todoId) {
        return { ...object, title: updatedTitle };
      }
      return object;
    });

    setTodos(newTodo);
  };

  React.useEffect(() => {
    if (route.params?.text) {
      console.log("Received data for update: ");
      console.log(" - ID: ", route.params.id);
      console.log(" - Title: ", route.params.text, "\n");

      updateTodo(route.params.id, route.params.text);
    }
  }, [route.params?.text]);

  React.useEffect(() => {
    if (route.params?.todoIdToDelete) {
      console.log("Received data for delete: ");
      console.log(" - ID: ", route.params.todoIdToDelete, "\n");

      removeTodo(route.params.todoIdToDelete);
    }
  }, [route.params?.todoIdToDelete]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo
              todoParam={item}
              onRemove={removeTodo}
              navigation={navigation}
            />
          )}
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
  },
});
