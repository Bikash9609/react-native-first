import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

import {Text, View} from 'native-base';
import {NavigationContainer, DefaultThemem} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import AuthScreen from './src/screens/Auth';
import EmailAuth from './src/screens/Auth/Email-Auth';

import {MainStackNavigator} from './src/navigation/Navigator.js';

import {primaryColor, secondaryColor} from './src/styles/components/colors';

const {Navigator, Screen} = createStackNavigator();

const UnAuthStack = () => {
  return (
    <Navigator headerMode="screen" initialRouteName="Listscreen">
      <Screen name="Listscreen" component={ListScreen} />
      <Screen name="Other" component={ComponentScreen} />
    </Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Navigator headerMode="none" screenOptions={{animationEnabled: true}}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

const AuthScreenStack = () => {
  return (
    <Navigator
      headerMode="screen"
      initialRouteName="Email Auth"
      screenOptions={{
        animationEnabled: true,
      }}>
      <Screen
        name="Login"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="Email Auth"
        component={EmailAuth}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setIsReady({isReady: true});
      } catch (error) {
        console.log(error);
      }
    }
    loadFont();
  }, []);

  const {Navigator, Screen} = Tab;

  if (!isReady) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footerIcons: {
    color: '#858282',
  },
  activeFooterIcons: {
    color: 'orange',
  },
});

export default MyTabs;
