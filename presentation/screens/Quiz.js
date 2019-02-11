import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Animated
} from "react-native";
import { styles } from "./styles/Quiz";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import FlipCard from "react-native-flip-card";

const screenWidth = Dimensions.get("window").width;

const QuizItem = (
  { item, index },
  { length, handleCorrectAnswer, handleIncorrectAnswer }
) => (
  <QuizContent
    index={index}
    item={item}
    length={length}
    handleCorrectAnswer={handleCorrectAnswer}
    handleIncorrectAnswer={handleIncorrectAnswer}
  />
);

class QuizContent extends Component {
  state = {
    flip: false
  };
  render() {
    const {
      handleCorrectAnswer,
      handleIncorrectAnswer,
      length,
      index,
      item
    } = this.props;
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
            >
              <Text style={styles.textButton}>Correct</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[
                styles.button,
                { backgroundColor: "red", borderColor: "red" }
              ]}
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
              onPress={() => handleCorrectAnswer(index)}
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
              onPress={() => handleIncorrectAnswer(index)}
            >
              <Text style={styles.textButton}>Incorrect</Text>
            </TouchableHighlight>
          </View>
        </FlipCard>
      </View>
    );
  }
}

export const Quiz = ({ navigation }) => (
  <Carousel
    data={navigation.getParam("cards")}
    renderItem={element =>
      QuizItem(element, {
        length: navigation.getParam("cards").length,
        handleCorrectAnswer: navigation.getParam("handleCorrectAnswer"),
        handleIncorrectAnswer: navigation.getParam("handleIncorrectAnswer")
      })
    }
    itemWidth={screenWidth}
    sliderWidth={screenWidth}
  />
);
