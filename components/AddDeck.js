import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export const AddDeck = ({handlePress}) => (
  <View style={styles.container}>
    <MaterialIcons
      name="add"
      color="white"
      size={10}
      onPress={() => handlePress()}
    />
    <MaterialCommunityIcons
      name="cards"
      color="white"
      size={30}
      onPress={() => handlePress()}
    />
  </View>
);

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#ba265d",
    borderRadius: "100px",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 10,
    alignSelf: "flex-end"
  }
})