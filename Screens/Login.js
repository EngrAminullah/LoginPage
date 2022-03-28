import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import styles from "./Styles";

const Login = () => {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "Play on the switch", key: "3" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList />
        </View>
      </View>
    </View>
  );
};

export default Login;
