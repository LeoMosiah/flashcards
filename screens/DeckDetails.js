import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export const DeckDetails = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Deck Title
    </Text>
    <Text style={styles.subtitle}>
      3 cards
    </Text>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.textButton}>
        Add Card
      </Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.textButton}>
        Start Quiz
      </Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1
  },
  title:{
    fontSize: 28,
    fontWeight: "bold"
  },
  subtitle:{
    fontSize: 18,
    color: "#777"
  },
  button:{
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    padding: 10
  },
  textButton:{
    fontSize: 24,
    alignSelf: "center"
  }
});