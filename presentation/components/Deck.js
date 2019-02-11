import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./styles/Deck";

export const Deck = ({ item, index }, navigation) => (
  <TouchableHighlight
    onPress={() =>
      navigation.navigate("DeckDetails", {
        deck: item
      })
    }
  >
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.cards}>{`${item.questions.length} cards`}</Text>
    </View>
  </TouchableHighlight>
);
