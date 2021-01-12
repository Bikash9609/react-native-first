import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// ICONS
import {AntDesign, Ionicons} from '@expo/vector-icons';

// STYLES
import {primaryColor} from '../styles/components/colors';

// SCREENS
import Login from '../screens/Auth';
import EmailAuth from '../screens/Auth/Email-Auth';
import Home from '../screens/HomeScreen';
import Search from '../screens/ComponentScreen';
import ListScreen from '../screens/ListScreen';

const MainStackNavigator = () => {
  const {Navigator, Screen} = createStackNavigator();
  const options = {
    initialRouteName: 'Home',
    activeColor: 'tomato',
    inactiveColor: 'black',
    barStyle: {backgroundColor: '#eee'},
    shifting: true,
  };
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{keyboardHidesTabBar: true}}>
      <Screen
        name="Login"
        component={Login}
        options={{...options, headerShown: false, tabBarVisible: false}}
      />
      <Screen
        name="EmailAuth"
        component={EmailAuth}
        options={{...options, headerShown: false, tabBarVisible: false}}
      />
      <Screen
        name="Home"
        component={TabNavigator}
        options={{...options, headerShown: false, tabBarVisible: true}}
      />
    </Navigator>
  );
};

const TabNavigator = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  const options = {};
  return (
    <Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        activeTintColor: primaryColor,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'md-home-sharp' : 'md-home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ListScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'person-circle-sharp' : 'person-circle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export {MainStackNavigator, TabNavigator};
