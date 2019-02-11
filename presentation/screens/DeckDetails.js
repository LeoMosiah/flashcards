import React, { Component } from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";
import { styles } from "./styles/DeckDetails";
import { clearLocalNotiifcation, setLocalNotification } from "../../data/api";

export class DeckDetails extends Component {
  state = {
    score: 0,
    maximumScore: 0
  };

  handleCorrectAnswer = async index => {
    await this.setState((prevState, props) => ({
      score: prevState.score + 1
    }));
    if (index + 1 >= this.state.maximumScore) {
      clearLocalNotiifcation().then(setLocalNotification);
      Alert.alert(
        "Your Score",
        `You scored ${this.state.score} out of ${this.state.maximumScore}`,
        [
          {
            text: "Back to Home",
            onPress: () => this.props.navigation.navigate("Home")
          }
        ]
      );
    }
  };

  handleIncorrectAnswer = index => {
    if (index + 1 >= this.state.maximumScore) {
      clearLocalNotiifcation().then(setLocalNotification);
      Alert.alert(
        "Your Score",
        `You scored ${this.state.score} out of ${this.state.maximumScore}`,
        [
          {
            text: "Back to Home",
            onPress: () => this.props.navigation.navigate("Home")
          }
        ]
      );
    }
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      maximumScore: navigation.getParam("deck").questions.length
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{navigation.getParam("deck").title}</Text>
        <Text style={styles.subtitle}>
          {`${navigation.getParam("deck").questions.length} cards`}
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() =>
            navigation.navigate("NewCard", {
              deckId: `${navigation.getParam("deck").id}`
            })
          }
        >
          <Text style={styles.textButton}>Add Card</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() =>
            navigation.navigate("Quiz", {
              cards: navigation.getParam("deck").questions,
              handleCorrectAnswer: this.handleCorrectAnswer,
              handleIncorrectAnswer: this.handleIncorrectAnswer
            })
          }
        >
          <Text style={styles.textButton}>Start Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
