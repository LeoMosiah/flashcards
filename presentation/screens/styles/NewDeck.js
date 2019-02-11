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
