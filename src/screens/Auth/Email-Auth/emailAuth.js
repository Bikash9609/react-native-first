import React from 'react';
import {Image} from 'react-native';
import {
  Text,
  View,
  Header,
  Left,
  Body,
  Button,
  Tab,
  Tabs,
  TabHeading,
  Right,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

// Components
import AuthForm from '../../../components/authForm';

// Styles
import {EmailAuthStyles} from '../../../styles/auth-styles';
import {primaryColor, secondaryColor} from '../../../styles/components/colors';

const EmailAuth = ({navigation}) => {
  const LOGO_URL =
    'https://res.cloudinary.com/seconde/image/upload/v1609942436/temp/Markar_Logo_500x500_Without_slogan_Text_HOLLOW_Transparent_k0n5kl.png';
  return (
    <>
      <Header
        noShadow
        androidStatusBarColor={primaryColor}
        style={EmailAuthStyles.header}>
        <Left>
          <Button
            transparent
            activeOpacity={0.3}
            onPress={() => navigation.goBack()}>
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
          <AuthForm />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#fff'}}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>Sign Up</Text>
            </TabHeading>
          }></Tab>
      </Tabs>
    </>
  );
};

export default EmailAuth;
