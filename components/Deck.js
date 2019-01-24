import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export const Deck = ({title, cards}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cards}>{`${cards} cards`}</Text>
  </View>
)

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 100,
    width: 100
  },
  title:{
    padding: 5,
  },
  cards:{
    padding: 5
  }
});