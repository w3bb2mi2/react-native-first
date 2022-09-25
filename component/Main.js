import { useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { gStyle } from "../styles/style";
import { country } from "../data";

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate("FullInfo");
  };
  const [madalWindow, setModalWindow] = useState(false);
  const [news, setNews] = useState(country);
  const closeModal = () => {
    setModalWindow(false);
  };
  return (
    <View>
      <Modal visible={madalWindow}>
        <View>
          <Ionicons
            onPress={closeModal}
            style={styles.iconAdd}
            name="close-circle"
            size={30}
            color="#FF6347"
          />
          <Text style={styles.title}>Форма для добавления статьи </Text>
        </View>
      </Modal>
      <Ionicons
        onPress={() => {
          setModalWindow(true);
        }}
        style={styles.iconAdd}
        name="add-circle"
        size={30}
        color="#66CDAA"
      />
      <Text style={gStyle.title}>Страны мира</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={gStyle.block}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              source={{
                width: "100%",
                height: 200,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: 5,
    color: "blue",
  },
  anons: {
    marginBottom: 30,
  },
  iconAdd: {
    textAlign: "center",
    marginVertical: 15,
  },
});
