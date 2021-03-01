import { StatusBar } from "expo-status-bar";
import React from "react";
import List from "./List";

export default function App() {
  return <List />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
