import { StyleSheet } from "react-native";
import { backgroundColor, primaryColor } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: backgroundColor
  },
  content: {
    width: "100%",
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 20,
    flexDirection: "row",
    flexWrap: "nowrap"
  }
});
