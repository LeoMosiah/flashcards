import { StyleSheet } from "react-native";
import { backgroundColor } from "../../components/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor
  },
  carouselContainer: {
    flex: 3,
    marginBottom: 30,
    marginTop: 30
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    padding: 10
  },
  textButton: {
    fontSize: 24,
    alignSelf: "center"
  }
});
