import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home } from "../screens/Home";
import { NewDeck } from "../screens/NewDeck";
import { DeckDetails } from "../screens/DeckDetails";

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
