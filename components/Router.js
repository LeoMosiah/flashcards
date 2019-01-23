import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home } from '../screens/Home';
import { NewDeck } from "../screens/NewDeck"

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Flashcards",
        headerStyle:{
          backgroundColor: "#ba265d",
        }
      }),
    },
    NewDeck:{
      screen: NewDeck,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "New Deck",
        headerBackTitle: "Home",
        headerStyle:{
          backgroundColor: "#ba265d",
        }
      }),
    }
  },
  {
    initialRouteName: "Home"
  }
);

export const Router = createAppContainer(AppNavigator);