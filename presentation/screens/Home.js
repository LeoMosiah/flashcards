import React, { Component } from "react";
import { View, TouchableHighlight, Text, Dimensions } from "react-native";
import { Deck } from "../components/Deck";
import { styles } from "./styles/Home";
import { connect } from "react-redux";
import { decksSelector } from "../../domain/redux/ducks/decksReducer";
import { getDecksAction } from "../../domain/redux/sagas/decksSaga";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getDecks();
  }
  render() {
    const { decks, navigation } = this.props;
    const screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          {decks && (
            <Carousel
              data={Object.values(decks)}
              renderItem={element => Deck(element, navigation)}
              itemWidth={screenWidth * 0.8}
              sliderWidth={screenWidth}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate("NewDeck")}
          >
            <Text style={styles.textButton}>New Deck</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: decksSelector(state)
});

const mapDispatchToProps = {
  getDecks: getDecksAction
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
