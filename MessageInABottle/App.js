import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginPage from './Components/login';
import Homescreen from './Components/Homescreen';

const HomeScreen = () => (
  <Homescreen />
);

const LoginScreen = () => (
  <LoginPage />
);


const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLabel: 'Login',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});


//export default RootDrawer;


export default class App extends React.Component {
  render() {
    return (
      <RootDrawer/ >
    );
  }
}