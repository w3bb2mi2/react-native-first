import React from "react";
import Main from "./component/Main";
import FullInfo from "./component/FullInfo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Главная",
            headerStyle: { backgroundColor: "#66CDAA" },
            headerTitleStyle: {
              fontWeight: "400",
              // marginLeft: 150,
            },
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "Контакты" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
