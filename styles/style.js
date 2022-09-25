import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#98FB98",
  },
  title: {
    fontSize: 20,
    color: "",
    // fontFamily: "mt-bold",
    backgroundColor: "#FFE4B5",
    paddingTop: 30,
    textAlign: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA07A",
    textAlign: "center",
  },
  body: {
    minHeight: 100,
    backgroundColor: "#98FB98",
  },
  block: {
    marginVertical: 3,
    backgroundColor: "#EEE8AA",
    padding: 5,
  },
});
