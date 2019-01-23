import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home } from '../screens/Home';
import { NewDeck } from "../screens/NewDeck"

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      }),
    },
    NewDeck:{
      screen: NewDeck
    }
  },
  {
    initialRouteName: "NewDeck"
  }
);

export const Router = createAppContainer(AppNavigator);