import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../styles/Deck";

export const Deck = ({ title, cards, handlePress }) => (
  <View style={styles.container}>
    <Text style={styles.title} onPress={() => handlePress()}>
      {title}
    </Text>
    <Text style={styles.cards}>{`${cards} cards`}</Text>
  </View>
);
