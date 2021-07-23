import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import Description from './src/detail/Description';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: {
    screen: Home
  },
  Description: {
    screen: Description
  },
  
},
{
  cardStyle: {
    paddingTop:
     StatusBar=currentHeight
  }
});

export default App;