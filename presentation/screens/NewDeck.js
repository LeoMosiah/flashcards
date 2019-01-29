import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { styles } from "../styles/NewDeck";
import { addDeck } from "../../data/api";

export class NewDeck extends Component {
  state = {
    newDeckTitle: ""
  };
  handleChange = newDeckTitle => {
    this.setState({ newDeckTitle });
  };
  handleSubmit = async () => {
    await addDeck(this.state.newDeckTitle);
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
