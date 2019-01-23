import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export const Deck = ({title, cards}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cards}>{cards}</Text>
  </View>
)

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title:{
    padding: 5,
    heigth:"50%",
    width: "50%"
  },
  cards:{
    padding: 5
  }
});