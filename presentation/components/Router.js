import { createStackNavigator, createAppContainer } from "react-navigation";
import { DeckDetails } from "../screens/DeckDetails";
import { Home } from "../screens/Home";
import { NewDeck } from "../screens/NewDeck";
import { NewCard } from "../screens/NewCard";
import { Quiz } from "../screens/Quiz";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    NewDeck: {
      screen: NewDeck
    },
    DeckDetails: {
      screen: DeckDetails
    },
    NewCard: {
      screen: NewCard
    },
    Quiz: {
      screen: Quiz
    }
  },
  {
    initialRouteName: "Home"
  }
);

export const Router = createAppContainer(AppNavigator);
