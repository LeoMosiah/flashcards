import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { addCardAction } from "../../domain/redux/ducks/decksReducer";
import { styles } from "../styles/NewCard";

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
  handleSubmit = () => {
    const id = this.props.navigation.getParam("deckId");
    this.props.addCard(id, {
      question: this.state.question,
      answer: this.state.answer
    });
    this.setState({
      question: "",
      answer: ""
    });
  };
  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" styles={styles.container}>
        <Text style={styles.title}>Make a question</Text>
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
