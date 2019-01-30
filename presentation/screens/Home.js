import React, { Component, Fragment } from "react";
import { View } from "react-native";
import { AddDeck } from "../components/AddDeck";
import { Deck } from "../components/Deck";
import { styles } from "../styles/Home";
import { connect } from "react-redux";
import { decksSelector } from "../../domain/redux/ducks/decksReducer";
import { getDecksAction } from "../../domain/redux/sagas/decksSaga";

const HomeContent = ({ decks }) => {
  return decks
    ? Object.values(decks).map(deck => (
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
      ))
    : null;
};

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getDecks();
  }
  render() {
    const { decks, navigation } = this.props;
    return (
      <Fragment>
        <View style={styles.container}>
          <HomeContent decks={decks} />
        </View>
        <AddDeck handlePress={() => navigation.navigate("NewDeck")} />
      </Fragment>
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
