import { Formik } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
const initialState = { name: "", anons: "", full: "", img: "" };
export default Form = ({addArticle}) => {
  return (
    <View style={styles.page}>
      <Formik
        initialValues={initialState}
        onSubmit={(values, action) => {
          addArticle(values)
          action.resetForm
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.textForm}
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              placeholder="Введите название"
            />
            <TextInput
              style={styles.textForm}
              onChangeText={props.handleChange("anons")}
              value={props.values.anons}
              placeholder="Введите краткое описание"
            />
            <TextInput
              style={styles.textForm}
              onChangeText={props.handleChange("full")}
              value={props.values.full}
              multiline
              placeholder="Введите текст статьи"
            />
            <TextInput
              style={styles.textForm}
              onChangeText={props.handleChange("full")}
              value={props.values.img}
              placeholder="Введите URL картинки"
            />
            <Button title="Добавить" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  textForm: {
    margin: 15,
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    padding: 3
  },
  page: {
    backgroundColor: ""
  }
});
