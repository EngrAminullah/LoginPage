import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    flex: 1,
    marginVertical: 20,
    justifyContent: "center",
    marginTop: 60,
  },

  email: {
    backgroundColor: "white",
    color: "black",
    width: "70%",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    elevation: 45,
    borderRadius: 30,
    alignSelf: "center",
  },
  password: {
    backgroundColor: "white",
    marginTop: 20,
    width: "70%",
    height: 40,
    elevation: 45,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
    alignSelf: "center",
  },

  text1: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginLeft: 30,
  },
  text2: {
    marginLeft: 50,
    color: "#b4b4b4",
    marginBottom: 60,
  },
  btn: {
    elevation: 50,
    marginTop: 60,
    right: 30,
    backgroundColor: "#f7a247",
    borderRadius: 30,
    width: 150,
    height: 50,
    alignSelf: "flex-end",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    paddingLeft: 30,
  },
  // header: {
  //   fontSize: 30,
  //   backgroundColor: "pink",
  //   textAlign: "center",
  // },
  // title: {
  //   fontSize: 25,
  // },
});

export default styles;
