import React, { Component } from "react";
import { View } from "react-native";
import { AddDeck } from "../components/AddDeck";
import { Deck } from "../components/Deck";
import { getDecks } from "../../data/api";
import { styles } from "../styles/Home";
import {
  decksSelector,
  receiveDecksAction
} from "../../domain/redux/ducks/decksReducer";
import { connect } from "react-redux";

class HomeScreen extends Component {
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
            key={deck.title}
            title={deck.title}
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

const mapStateToProps = state => ({
  decks: decksSelector(state)
});

const mapDispatchToProps = {
  setDecks: receiveDecksAction
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
