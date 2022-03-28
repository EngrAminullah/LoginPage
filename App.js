import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/Login";
// import Styles from "./Screens/Styles";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Login />

      <StatusBar style="auto" />
    </View>
  );
}
