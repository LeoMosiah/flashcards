import React, { Component } from "react";
import { View } from "react-native";
import { AddDeck } from "../components/AddDeck";
import { Deck } from "../components/Deck";
import { addDeck, getDecks } from "../../data/api";
import { styles } from "../styles/Home";

export class Home extends Component {
  state = {
    decks: {}
  };
  async componentDidMount() {
    const decks = await getDecks();
    this.setState({ decks });
  }
  render() {
    const { navigation } = this.props;
    const { decks } = this.state;
    return (
      <View style={styles.container}>
        {Object.values(decks).map(deck => (
          <Deck
            key={deck.newDeckTitle}
            title={deck.newDeckTitle}
            cards={deck.questions.length}
            handlePress={() =>
              navigation.navigate("DeckDetails", {
                deck: deck
              })
            }
          />
        ))}
        <AddDeck handlePress={() => navigation.navigate("NewDeck")} />
      </View>
    );
  }
}
