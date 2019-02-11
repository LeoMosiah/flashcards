import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    margin: 10
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1
  },
  flipCard: {
    backfaceVisibility: "hidden"
  },
  flipCardBack: {},
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 18,
    color: "#4d4dff"
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    padding: 10,
    marginBottom: 30
  },
  textButton: {
    fontSize: 24,
    alignSelf: "center"
  },
  counter: {
    alignSelf: "flex-start",
    fontSize: 20
  }
});
