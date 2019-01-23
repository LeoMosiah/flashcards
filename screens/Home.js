import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { AddDeck } from "../components/AddDeck"
import { Deck } from "../components/Deck"

export const Home = () =>  (
  <View style={styles.container}>
    <View style={styles.header}>
      <MaterialCommunityIcons
        name="face-profile"
        color="#ba265d"
        size={50}
        style={styles.avatar}
      />
    </View>
    <View style={styles.content}>
      <Deck
        title="New Deck"
        cards="13"
      />
    </View>
    <AddDeck/>
  </View>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e6ecf0",
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width:"100%",
    flex: 1,
    padding: 5
  },
  content:{
    width:"100%",
    flex: 8,
    alignItems: "flex-start",
    padding: 20,
  },
  avatar:{
    alignSelf:"center"
  }
});