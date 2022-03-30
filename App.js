import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./Screens/BottomNav";
import Login from "./Screens/Login";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Login /> */}
      <BottomNav />

      <StatusBar style="auto" />
    </View>
  );
}
