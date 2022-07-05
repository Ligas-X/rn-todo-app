import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
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

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Navbar title="Todo App!" />
      <SafeAreaView style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todoParam={item} />}
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
