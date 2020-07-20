import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';
import StateScreen from './src/screens/stateScreen'
import CountryScreen from './src/screens/countryScreen'
import WorldScreen from './src/screens/worldScreen'
import Precautions from './src/screens/precautions';
import { Provider } from './src/context/DataContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fontisto} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const bottomTabNavigator = createBottomTabNavigator(
  {
    India: createStackNavigator({
      Country:CountryScreen,
      State:StateScreen
    }),
    World: WorldScreen,
    Health:Precautions
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'India') {
          return focused?<MaterialCommunityIcons name="home" size={27} color={tintColor} />:<MaterialCommunityIcons name="home-outline" size={25} color={tintColor} />
        } else if (routeName === 'World') {
          return focused?<Fontisto name="world" size={25} color={tintColor} />:<Ionicons name="ios-globe" size={25} color={tintColor} />;
        }else{
          return focused?<FontAwesome5 name="hand-holding-heart" size={25} color={tintColor} />:<FontAwesome5 name="hand-holding-heart" size={22} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ee7785',
      inactiveTintColor: 'gray',
    },
  }
);
const App = createAppContainer(bottomTabNavigator)

export default ()=>{
  return (
    <Provider>
      <App/>
    </Provider>
    )
} 
