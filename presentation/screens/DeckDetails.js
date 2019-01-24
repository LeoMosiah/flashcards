import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../styles/DeckDetails";

export const DeckDetails = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {navigation.getParam("deck", "Deu ruim").title}
    </Text>
    <Text style={styles.subtitle}>
      {`${navigation.getParam("deck", "Deu ruim").questions.length} cards`}
    </Text>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.textButton}>Add Card</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.textButton}>Start Quiz</Text>
    </TouchableHighlight>
  </View>
);
