import React, { Component } from "react";
import { View } from "react-native";
import { AddDeck } from "../components/AddDeck";
import { Deck } from "../components/Deck";
import { addDeck, getDecks } from "../../data/api";
import { styles } from "../styles/Home";

export class Home extends Component {
  state = {
    decks: {},
    title: ""
  };
  async componentDidMount() {
    const decks = await getDecks();
    this.setState({ decks });
  }
  handleChangeText = title => {
    this.setState({ title });
  };
  handleSubmit = async () => {
    await addDeck(this.state.title);
    this.setState({
      title: ""
    });
    this.props.navigation.navigate("Home");
  };
  render() {
    const { navigation } = this.props;
    const { decks, title } = this.state;
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
        <AddDeck
          handlePress={() =>
            navigation.navigate("NewDeck", {
              handleSubmit: this.handleSubmit,
              handleChange: this.handleChangeText,
              title
            })
          }
        />
      </View>
    );
  }
}
