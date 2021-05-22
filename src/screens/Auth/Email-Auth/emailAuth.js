import React, {useEffect} from 'react';
import {Image, ActivityIndicator} from 'react-native';
import {
  Text,
  Header,
  Left,
  Body,
  Button,
  Tab,
  Tabs,
  TabHeading,
  Container,
  View,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

// Components
import * as authActions from '../../../store/auth/actions';
import {LoginForm, SignupForm} from '../../../components/authForm';
import Loader from '../../../components/Loader';

// Styles
import {EmailAuthStyles} from '../../../styles/auth-styles';
import {primaryColor} from '../../../styles/components/colors';

const EmailAuth = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, isUserLogged} = useSelector((state) => ({
    loading: state.auth.loading,
    isUserLogged: state.auth.isUserLogged,
  }));

  useEffect(() => {
    if (isUserLogged) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {name: 'Home'},
            {
              name: 'Profile',
            },
          ],
        }),
      );
      navigation.navigate('Home');
    }
  }, [isUserLogged]);

  const onUserLogin = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    dispatch(authActions.userLogin(payload));
  };

  // TODO: to be implemented
  const onUserSignup = (data) => {
    return alert('Signup not yet implemented');
    const payload = {};
    dispatch(authActions.userSignup(data));
  };

  return (
    <>
      {loading && <Loader />}
      <Header
        noShadow
        androidStatusBarColor={primaryColor}
        style={EmailAuthStyles.header}>
        <Left>
          <Button
            transparent
            activeOpacity={0.3}
            onPress={() => navigation.navigate('Login')}>
            <Ionicons name="chevron-back-sharp" size={29} color="#000" />
          </Button>
        </Left>

        <Body></Body>
      </Header>

      <Tabs
        tabBarUnderlineStyle={{
          borderRadius: 50,
          elevation: 2,
          backgroundColor: primaryColor,
        }}
        springFriction={20}
        springTension={20}
        tabBarPosition={'top'}>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#fff'}}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>Log In</Text>
            </TabHeading>
          }>
          <LoginForm onSubmit={onUserLogin} />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#fff'}}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>Sign Up</Text>
            </TabHeading>
          }>
          <SignupForm onSubmit={onUserSignup} />
        </Tab>
      </Tabs>
    </>
  );
};

export default EmailAuth;
