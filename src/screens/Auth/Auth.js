import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Body,
  Container,
  Content,
  Text,
  Title,
  View,
  Button,
  Icon,
  Right,
} from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';
import {AntDesign} from '@expo/vector-icons';

import {buttonStyles} from '../../styles/components/index';
import {MainContent} from '../../styles/auth-styles';
import Carousel from 'react-native-snap-carousel';
import Card from '../../components/card/Card';
import {primaryColor, secondaryColor} from '../../styles/components/colors';

const LOGO_URL =
  'https://res.cloudinary.com/seconde/image/upload/v1609942436/temp/Markar_Logo_500x500_Without_slogan_Text_HOLLOW_Transparent_k0n5kl.png';

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
        blurRadius={1}
        resizeMode="cover"
        width="100%"
        style={MainContent.wrapper}>
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
            colors={['rgba(255, 255, 255,1)', primaryColor]}
            style={{
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View
              style={{
                justifyContent: 'center',
                maxHeight: '60%',
                padding: 20,
                alignItems: 'flex-start',
              }}>
              <Image
                source={{
                  uri: LOGO_URL,
                }}
                width={'100%'}
                style={{
                  padding: 0,
                  resizeMode: 'contain',
                  width: '40%',
                  height: '100%',
                  // alignSelf: 'flex-start',
                }}
                height="100%"
              />
              <Text selectable={false} style={MainContent.mainText}>
                Home services from locals around you
              </Text>
            </View>

            <View style={{}}>
              <View style={MainContent.buttonsWrapper}>
                <Button
                  style={{
                    ...buttonStyles.primary,
                    width: '100%',
                    paddingTop: 30,
                    paddingBottom: 30,
                  }}
                  iconLeft
                  activeOpacity={0.9}
                  full>
                  <AntDesign name="mail" size={24} color={primaryColor} />

                  <Text
                    style={{
                      color: primaryColor,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Continue with Email
                  </Text>
                </Button>

                <Button
                  style={{
                    ...buttonStyles.primary,
                    width: '100%',
                    paddingTop: 30,
                    paddingBottom: 30,
                  }}
                  iconLeft
                  activeOpacity={0.9}
                  full>
                  <AntDesign name="google" size={24} color={primaryColor} />
                  <Text
                    style={{
                      color: primaryColor,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
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
