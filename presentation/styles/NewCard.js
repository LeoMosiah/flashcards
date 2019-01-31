import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: secondaryColor
  },
  input: {
    borderWidth: 2,
    borderColor: primaryColor,
    width: "100%",
    padding: 5,
    borderRadius: 10,
    color: secondaryColor
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 5,
    padding: 10,
    width: "50%"
  },
  textButton: {
    alignSelf: "center",
    color: secondaryColor
  }
});
