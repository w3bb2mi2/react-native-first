import { Button, Image, Text, View } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  const loadScene = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Image
        source={{
          width: "100%",
          height: 200,
          uri: route.params.img,
        }}
      />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.body}>{route.params.full}</Text>
    </View>
  );
}
