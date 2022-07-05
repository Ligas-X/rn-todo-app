import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#0C69F3",
    paddingBottom: 10,
  },
  navbarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
