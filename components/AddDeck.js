import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export const AddDeck = () => (
  <View style={styles.container}>
    <MaterialIcons
      name="add"
      color="white"
      size={10}
    />
    <MaterialCommunityIcons
      name="cards"
      color="white"
      size={30}
    />
  </View>
);

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#ba265d",
    borderRadius: "100px",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 10,
    alignSelf: "flex-end"
  }
})