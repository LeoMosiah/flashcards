import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home } from '../screens/Home';
import { NewDeck } from "../screens/NewDeck"
import { DeckDetails } from '../screens/DeckDetails';

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    NewDeck:{
      screen: NewDeck,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "New Deck",
        headerBackTitle: "Home",
        headerStyle:{
          backgroundColor: "#00e6e6",
        }
      })
    },
    DeckDetails: {
      screen: DeckDetails,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Deck Details",
        headerBackTitle: "Home",
        headerStyle:{
          backgroundColor: "#00e6e6",
        }
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);

export const Router = createAppContainer(AppNavigator);