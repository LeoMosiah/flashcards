import { StyleSheet } from "react-native";
import { secondaryColor, secondaryColorDark } from "./colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 100,
    width: "100%"
  },
  title: {
    padding: 5,
    color: secondaryColorDark
  },
  cards: {
    padding: 5,
    color: secondaryColor
  }
});
