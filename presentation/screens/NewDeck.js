import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { styles } from "./styles/NewDeck";
import { addDeckAction } from "../../domain/redux/ducks/decksReducer";
import { addDeck } from "../../data/api";
import { connect } from "react-redux";
import { Deck } from "../../domain/entities/Deck";

class NewDeckContainer extends Component {
  state = {
    newDeckTitle: ""
  };
  handleChange = newDeckTitle => {
    this.setState({ newDeckTitle });
  };
  handleSubmit = async () => {
    const newDeck = new Deck(this.state.newDeckTitle);
    await addDeck(newDeck);
    this.props.addNewDeck(newDeck);
    this.props.navigation.navigate("Home");
  };
  render() {
    const { newDeckTitle } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          value={newDeckTitle}
          onChangeText={text => this.handleChange(text)}
          placeholder="Deck Title"
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#00b3b3"
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.textButton}>Add Deck</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = {
  addNewDeck: addDeckAction
};

export const NewDeck = connect(
  null,
  mapDispatchToProps
)(NewDeckContainer);
