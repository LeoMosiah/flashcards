import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { secondaryColor } from "../styles/colors";
import { styles } from "../styles/AddDeck";

export const AddDeck = ({ handlePress }) => (
  <View style={styles.container}>
    <MaterialIcons
      name="add"
      color={secondaryColor}
      size={15}
      onPress={() => handlePress()}
    />
    <MaterialCommunityIcons
      name="cards-outline"
      color={secondaryColor}
      size={30}
      onPress={() => handlePress()}
    />
  </View>
);
