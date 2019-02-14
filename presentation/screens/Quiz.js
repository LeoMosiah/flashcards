import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Alert
} from "react-native";
import { styles } from "./styles/Quiz";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import FlipCard from "react-native-flip-card";
import { clearLocalNotifcation, setLocalNotification } from "../../data/api";

const screenWidth = Dimensions.get("window").width;

const QuizItem = ({ item, index }, { length, handleAnswer }) => (
  <QuizContent
    index={index}
    item={item}
    length={length}
    handleAnswer={handleAnswer}
  />
);

class QuizContent extends Component {
  state = {
    flip: false
  };
  render() {
    const { handleAnswer, length, index, item } = this.props;
    return (
      <View style={styles.card}>
        <FlipCard
          style={{ width: screenWidth * 0.8 }}
          flipVertical={false}
          flipHorizontal={true}
          flip={this.state.flip}
          friction={6}
          perspective={1000}
          clickable={false}
        >
          <View style={styles.container}>
            <Text style={styles.counter}>{`${index + 1}/ ${length}`}</Text>
            <Text style={styles.title}>{item.question}</Text>
            <TouchableHighlight
              onPress={() => {
                this.setState({ flip: !this.state.flip });
              }}
            >
              <Text style={styles.subtitle}>Answer</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                { backgroundColor: "green", borderColor: "green" }
              ]}
              disabled={true}
            >
              <Text style={styles.textButton}>Correct</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                { backgroundColor: "red", borderColor: "red" }
              ]}
              disabled={true}
            >
              <Text style={styles.textButton}>Incorrect</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.container}>
            <Text style={styles.counter}>{`${index + 1}/ ${length}`}</Text>
            <Text style={styles.title}>{item.answer}</Text>
            <TouchableHighlight
              onPress={() => {
                this.setState({ flip: !this.state.flip });
              }}
            >
              <Text style={styles.subtitle}>Question</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => handleAnswer(index, "Correct")}
              style={[
                styles.button,
                { backgroundColor: "green", borderColor: "green" }
              ]}
            >
              <Text style={styles.textButton}>Correct</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                { backgroundColor: "red", borderColor: "red" }
              ]}
              onPress={() => handleAnswer(index, "Incorrect")}
            >
              <Text style={styles.textButton}>Incorrect</Text>
            </TouchableHighlight>
          </View>
        </FlipCard>
      </View>
    );
  }
}

export class Quiz extends Component {
  state = {
    score: 0,
    maximumScore: 0,
    answeredQuestions: []
  };
  handleAnswer = async (index, answer) => {
    if (!this.state.answeredQuestions.includes(index)) {
      await this.setState((prevState, props) => ({
        score: answer === "Correct" ? prevState.score + 1 : prevState.score,
        answeredQuestions: prevState.answeredQuestions.concat(index)
      }));

      if (index + 1 === this.state.maximumScore) {
        clearLocalNotifcation().then(setLocalNotification);
        Alert.alert(
          "Your Score",
          `You scored ${this.state.score} out of ${this.state.maximumScore}`,
          [
            {
              text: "Back to Home",
              onPress: () => this.props.navigation.navigate("Home")
            },
            {
              text: "Back to Quiz",
              onPress: () =>
                this.props.navigation.push("Quiz", {
                  cards: this.props.navigation.getParam("cards")
                })
            }
          ]
        );
        this.setState({
          answeredQuestions: [],
          score: 0
        });
      } else {
        this._carousel.snapToNext();
      }
    } else {
      Alert.alert(
        "You already answered this question",
        `Move to the next one`,
        [
          {
            text: "Next Question",
            onPress: () => this.props.navigation.navigate("Home")
          }
        ]
      );
    }
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      maximumScore: navigation.getParam("cards").length
    });
  }
  render() {
    const { navigation } = this.props;
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={navigation.getParam("cards")}
        renderItem={element =>
          QuizItem(element, {
            length: navigation.getParam("cards").length,
            handleAnswer: this.handleAnswer
          })
        }
        itemWidth={screenWidth}
        sliderWidth={screenWidth}
      />
    );
  }
}
