import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { addCardAction } from "../../domain/redux/ducks/decksReducer";
import { styles } from "./styles/NewCard";
import { Card } from "../../domain/entities/Card";
import { addCardToDeck } from "../../data/api";

class NewCardContainer extends Component {
  state = {
    question: "",
    answer: ""
  };
  handleChangeQuestionText = question => {
    this.setState({ question });
  };
  handleChangeAnswerText = answer => {
    this.setState({ answer });
  };
  handleSubmit = async () => {
    const id = this.props.navigation.getParam("deckId");
    const cardToAdd = new Card(this.state.question, this.state.answer);
    await addCardToDeck(id, cardToAdd);
    this.props.addCard(id, cardToAdd);
    this.setState({
      question: "",
      answer: ""
    });
  };
  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>Question</Text>
        <TextInput
          style={styles.input}
          value={question}
          onChangeText={text => this.handleChangeQuestionText(text)}
          placeholder="Question"
        />
        <Text style={styles.title}>Answer</Text>
        <TextInput
          style={styles.input}
          value={answer}
          onChangeText={text => this.handleChangeAnswerText(text)}
          placeholder="Question"
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.textButton}>Add Card</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = {
  addCard: addCardAction
};

export const NewCard = connect(
  null,
  mapDispatchToProps
)(NewCardContainer);
