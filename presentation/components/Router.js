import { createStackNavigator, createAppContainer } from "react-navigation";
import { NewDeck } from "../screens/NewDeck";
import { DeckDetails } from "../screens/DeckDetails";
import { Home } from "../screens/Home";

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
    }
  },
  {
    initialRouteName: "Home"
  }
);

export const Router = createAppContainer(AppNavigator);
