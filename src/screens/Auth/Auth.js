import React from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Text,
  Title,
  View,
  Button,
  Icon,
  Right,
} from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';

import {buttonStyles} from '../../styles/components/index';
import {MainContent} from '../../styles/auth-styles';
import Carousel from 'react-native-snap-carousel';
import Card from '../../components/card/Card';

import Logo from '../../assets/images/AuthScreen/Logo_Nav.png';
import {log} from 'react-native-reanimated';

const auth = ({navigation}) => {
  let data = [
    {name: 'Title', item: 'one'},
    {name: 'Title2', item: 'one2'},
    {name: 'Title4', item: 'one3'},
  ];

  return (
    <Container>
      <ImageBackground
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_960_720.jpg',
        }}
        blurRadius={0.5}
        resizeMode="cover"
        width="100%"
        style={MainContent.Wrapper}>
        <View
          style={{
            height: '100%',
            width: '100%',
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}>
          <LinearGradient
            // Background Linear Gradient

            colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 136, 0, 0.9)']}
            style={styles.background}>
            <View style={{height: '45%', justifyContent: 'center'}}>
              <Image
                source={{
                  uri:
                    'https://res.cloudinary.com/seconde/image/upload/v1609831952/Temp/200x47_Logo_Nav_nl26wf.png',
                }}
                width={'100%'}
                style={{
                  padding: 0,
                  resizeMode: 'contain',
                  width: 127,
                  height: '50%',
                  alignSelf: 'center',
                }}
                // height="100%"
              />
            </View>

            <View style={{height: '100%'}}>
              <View style={MainContent.Content}>
                <Text style={MainContent.Header}>
                  Home services from locals around you.
                </Text>

                <Button style={buttonStyles.primary} activeOpacity={0.8}>
                  <Text style={{color: 'orange', fontWeight: 'bold'}}>
                    Login
                  </Text>
                </Button>

                <Button style={buttonStyles.primary} activeOpacity={0.8}>
                  <Text style={{color: 'orange', fontWeight: 'bold'}}>
                    Sign up{' '}
                  </Text>
                </Button>
                <Button style={buttonStyles.primary} activeOpacity={0.8} full>
                  <Text style={{color: 'orange', fontWeight: 'bold'}}>
                    Connect with Google
                  </Text>
                </Button>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default auth;

const styles = StyleSheet.create({});
