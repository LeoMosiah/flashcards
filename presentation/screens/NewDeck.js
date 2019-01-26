import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { styles } from "../styles/NewDeck";

export const NewDeck = ({ navigation }) => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <Text style={styles.title}>What is the title of your new deck?</Text>
    <TextInput
      value={navigation.getParam("title")}
      onChangeText={text => navigation.getParam("handleChange", text)}
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
