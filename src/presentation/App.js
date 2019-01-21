import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { DecksScreen } from './screens/DecksScreen';
import { NewDeckScreen } from './screens/NewDeckScreen';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { fetchInitialData } from '../data/api';

export default class App extends Component {
  async componentDidMount() {
    await fetchInitialData()
  }
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    'Decks': { screen: DecksScreen },
    'New Deck': { screen: NewDeckScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        return routeName === 'Decks' ? (
          <MaterialCommunityIcons name="cards-outline" size={30} color={tintColor} />
        ) : (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }

);

const AppContainer = createAppContainer(AppNavigator);