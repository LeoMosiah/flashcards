import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { DecksScreen } from './screens/DecksScreen';
import { NewDeckScreen } from './screens/NewDeckScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppNavigator = createBottomTabNavigator(
  {
    'Decks': { screen: DecksScreen },
    'New Deck': { screen: NewDeckScreen },
  }
);

const AppContainer = createAppContainer(AppNavigator);