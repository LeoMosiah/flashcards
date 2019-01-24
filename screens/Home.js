import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { AddDeck } from "../components/AddDeck"
import { Deck } from "../components/Deck"
import { getDecks } from '../data/api';
import { connect } from 'react-redux';
import { decksSelector, receiveDecksAction } from '../domain/redux/ducks/decksReducer';

export class HomeComponent extends Component {
  async componentDidMount() {
    const decks = await getDecks();
    this.props.getDecks(decks)
  }
  render() {
    const { navigation, decks } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="face-profile"
            color="black"
            size={50}
            style={styles.avatar}
          />
        </View>
        <View style={styles.content}>
          {
            Object.values(decks).map(deck => (
              <Deck
                key={deck.title}
                title={deck.title}
                cards={deck.questions.length}
              />
            ))
          }
        </View>
        <AddDeck
          handlePress={() => navigation.navigate("NewDeck")}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: decksSelector(state)
});

const mapDispatchToProps = {
  getDecks : receiveDecksAction
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e6ecf0",
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00e6e6",
    width:"100%",
    flex: 1,
    padding: 5
  },
  content:{
    width:"100%",
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 20,
    flexDirection: "row"
  },
  avatar:{
    alignSelf:"center"
  },
});
