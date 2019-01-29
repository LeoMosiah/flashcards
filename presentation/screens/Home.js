import React, { Component } from "react";
import { View } from "react-native";
import { AddDeck } from "../components/AddDeck";
import { Deck } from "../components/Deck";
import { styles } from "../styles/Home";
import { connect } from "react-redux";
import { decksSelector } from "../../domain/redux/ducks/decksReducer";
import { getDecksAction } from "../../domain/redux/sagas/decksSaga";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getDecks();
  }
  render() {
    const { decks, navigation } = this.props;
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
  getDecks: getDecksAction
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
