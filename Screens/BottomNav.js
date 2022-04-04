import React from "react";
import {
  Text,
  View,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import styles from "./Styles";

function HomeScreen() {
  return (
    <SafeAreaView name="Login" style={{ flex: 1 }}>
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
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
}
function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>
        Text
        <AntDesign
          name="password"
          size={204}
          color="black"
          style={{ marginRight: 20, paddingLeft: 15 }}
        />
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
