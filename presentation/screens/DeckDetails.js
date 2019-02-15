import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles/DeckDetails";
import { decksSelector } from "../../domain/redux/ducks/decksReducer";
import { connect } from "react-redux";

const DeckDetailsComponent = ({ deck, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.subtitle}>{`${deck.questions.length} cards`}</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() =>
          navigation.navigate("NewCard", {
            deckId: `${deck.id}`
          })
        }
      >
        <Text style={styles.textButton}>Add Card</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() =>
          navigation.navigate("Quiz", {
            cards: deck.questions,
            deckId: deck.id
          })
        }
      >
        <Text style={styles.textButton}>Start Quiz</Text>
      </TouchableHighlight>
    </View>
  );
};

const mapStateToProps = (state, { navigation }) => {
  const decks = decksSelector(state);
  return {
    deck: decks[navigation.getParam("deckId")]
  };
};

export const DeckDetails = connect(mapStateToProps)(DeckDetailsComponent);
