import React, { Component } from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableHighlight } from "react-native";
import { addDeck } from '../data/api';

export class NewDeck extends Component {
  state ={
    deckTitle: ""
  };
  handleChangeText = (deckTitle) => {
    this.setState({deckTitle})
  };
  handleSubmit = async () => {
    await addDeck(this.state.deckTitle);
    this.setState({
      deckTitle: ""
    })
    this.props.navigation.navigate("Home")
  };
  render() {
    const { deckTitle } = this.state;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
      >
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <TextInput
          value={deckTitle}
          onChangeText={(text) => this.handleChangeText(text)}
          placeholder="Deck Title"
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#00b3b3"
        >
          <Text
            style={styles.textButton}
            onPress={() => this.handleSubmit()}
          >
            Add Deck
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20
  },
  title:{
    fontSize: 34,
    fontWeight: "bold"
  },
  input:{
    borderWidth: 2,
    borderColor: "#00e6e6",
    width: "100%",
    padding: 5,
    borderRadius: 10
  },
  button:{
    backgroundColor: "#00e6e6",
    borderRadius: 5,
    padding: 10,
    width: "50%",
  },
  textButton:{
    alignSelf: "center"
  }
});