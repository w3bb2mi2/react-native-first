import { Formik } from "formik";
import { StyleSheet, TextInput, View } from "react-native";
const initialState = { name: "", anons: "", full: "", img: "" };
export default Form = () => {
  return (
    <View>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              placeholder="Введите название"
            />
            <TextInput
              onChangeText={props.handleChange("anons")}
              value={props.values.anons}
              placeholder="Введите краткое описание"
            />
            <TextInput
              onChangeText={props.handleChange("full")}
              value={props.values.full}
              multiline
              placeholder="Введите текст статьи"
            />
            <TextInput
              onChangeText={props.handleChange("full")}
              value={props.values.img}
              placeholder="Введите URL картинки"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({});
