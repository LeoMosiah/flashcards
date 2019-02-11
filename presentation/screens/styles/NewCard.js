import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 34,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 2,
    width: "100%",
    padding: 5,
    borderRadius: 10
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: "50%",
    borderWidth: 1
  },
  textButton: {
    textAlign: "center"
  }
});
