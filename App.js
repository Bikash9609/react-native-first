import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer, DefaultThemem} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import store, {persistedStore} from './src/store';
import 'react-native-gesture-handler';
import {primaryColor, secondaryColor} from './src/styles/components/colors';
import {MainStackNavigator} from './src/navigation/Navigator.js';

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

  if (!isReady) {
    return <ActivityIndicator />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default MyTabs;
