import React from "react";
import {
  View,
  Text,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import styles from "./Styles";
import BottomNav from "./BottomNav";
const Login = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.text1}>LOGIN</Text>
            <Text style={styles.text2}>Please Sign in here to continue!</Text>
          </View>
          <View>
            <View style={styles.email}>
              <MaterialIcons
                name="email"
                size={24}
                color="black"
                style={{ marginRight: 20, paddingLeft: 15 }}
              />
              <TextInput
                placeholder="Type Your Email"
                placeholderTextColor="#b4b4b4"
                returnKeyType="go"
                style={{ fontSize: 15 }}
              />
            </View>
            <View style={styles.password}>
              <MaterialCommunityIcons
                name="onepassword"
                size={24}
                color="black"
                style={{ marginRight: 20, paddingLeft: 15 }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#b4b4b4"
                returnKeyType="go"
                secureTextEntry
                autoCorrect={false}
                style={{ fontSize: 14 }}
              />
            </View>
          </View>

          <TouchableOpacity>
            <View style={styles.btn}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Press
              </Text>
              <AntDesign
                name="arrowright"
                size={24}
                color="black"
                style={{ marginLeft: 25, top: 3, color: "white" }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Login;
