import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export const AddDeck = ({handlePress}) => (
  <View style={styles.container}>
    <MaterialIcons
      name="add"
      color="white"
      size={15}
      onPress={() => handlePress()}
    />
    <MaterialCommunityIcons
      name="cards-outline"
      color="white"
      size={30}
      onPress={() => handlePress()}
    />
  </View>
);

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#00e6e6",
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