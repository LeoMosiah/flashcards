import { StyleSheet } from "react-native";
import { primaryColor } from "./colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 10,
    alignSelf: "flex-end",
    marginBottom: 20,
    marginRight: 20
  }
});
