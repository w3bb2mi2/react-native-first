import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "./styles/style";
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import MainStack from "./navigate";
import FullInfo from "./component/FullInfo";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./fonts/Montserrat-ExtraBold.ttf"),
    "mt-light": require("./fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  return (
    <View style={gStyle.main}>
      <MainStack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
