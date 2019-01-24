import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import { addDeck } from "../../data/api";
import { styles } from "../styles/NewDeck";

export class NewDeck extends Component {
  state = {
    deckTitle: ""
  };
  handleChangeText = deckTitle => {
    this.setState({ deckTitle });
  };
  handleSubmit = async () => {
    await addDeck(this.state.deckTitle);
    this.setState({
      deckTitle: ""
    });
    this.props.navigation.navigate("Home");
  };
  render() {
    const { deckTitle } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          value={deckTitle}
          onChangeText={text => this.handleChangeText(text)}
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
