import React, {useEffect, useCallback} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  ToastAndroid,
  ImageBackground,
  Image,
} from 'react-native';
import {Body, Button, Header, List, ListItem, Right, Title} from 'native-base';
import {AntDesign} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {LinearGradient} from 'expo-linear-gradient';

import * as profileActions from '../store/profile/actions';
import * as authActions from '../store/auth/actions';

import Loader from '../components/Loader';
import {
  lightTheme,
  primaryColor,
  textColors,
  secondaryColor,
} from '../styles/colors';
import {text} from '../styles/globals';
import {buttonStyles, socialButtonStyles} from '../styles/components/button';
import {ProfileStyles} from '../styles/screens/profile-screen';

function ListScreen({navigation}) {
  const dispatch = useDispatch();

  const {user, loading, error, isUserLogged} = useSelector((state) => ({
    user: state.profile.user,
    error: state.profile.error,
    loading: state.profile.loading,
    isUserLogged: state.auth.isUserLogged,
  }));

  const onRefresh = useCallback(() => {
    dispatch(profileActions.fetchUserProfile());
  }, []);

  const onUserLogout = () => dispatch(authActions.userLogout());

  useEffect(() => {
    // if (!isUserLogged) return navigation.navigate('EmailAuth');

    if (!user && !loading && !error) {
      onRefresh();
    }
  }, [user, loading, error, dispatch, isUserLogged]);

  if (user) var {name, email, address, contactNo} = user;

  if (!isUserLogged) {
    return (
      <ImageBackground
        resizeMode="cover"
        blurRadius={1}
        source={require('./assets/images/bg/Shiny_Overlay.png')}
        style={ProfileStyles.wrapper}>
        <LinearGradient
          colors={['rgba(255,255,255, 0.6)', 'rgba(255, 255, 255, 0.9)']}
          start={{x: 0.2, y: 0.1}}
          style={ProfileStyles.backDrop}>
          <View style={ProfileStyles.logoWrapper}>
            <Image
              source={require('./assets/images/AuthScreen/Logo_Nav_2.png')}
              style={ProfileStyles.LogoImage}
              height={40}
              resizeMode="contain"
              width="100%"
            />
          </View>
          <View style={ProfileStyles.innerWrapper}>
            <Button
              style={ProfileStyles.authButton}
              iconLeft
              onPress={() => navigation.navigate('EmailAuth')}
              full
              activeOpacity={0.8}>
              <AntDesign name="mail" size={19} style={ProfileStyles.authIcon} />
              <Text style={ProfileStyles.authButtonText}>Signup</Text>
              <View></View>
            </Button>
            <Button
              style={ProfileStyles.authButton}
              iconLeft
              onPress={() => navigation.navigate('EmailAuth')}
              full
              activeOpacity={0.8}>
              <AntDesign name="mail" size={19} style={ProfileStyles.authIcon} />
              <Text style={ProfileStyles.authButtonText}>Login</Text>
              <View></View>
            </Button>
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }

  return (
    <>
      {loading && <Loader />}
      {error &&
        ToastAndroid.show(
          error?.message || 'Some error ocurred',
          ToastAndroid.SHORT,
        )}
      <StatusBar
        backgroundColor={'#ffff'}
        barStyle={'dark-content'}
        translucent={false}
      />
      <SafeAreaView>
        <ScrollView
          bounces
          bouncesZoom
          style={ProfileStyles.scrollView}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
          }>
          <Header
            noLeft
            style={{backgroundColor: '#fff'}}
            androidStatusBarColor="#FFA500">
            <Body>
              <Title style={{color: '#000'}}>My profile</Title>
            </Body>
            <Right>
              <Button transparent>
                <AntDesign name="setting" color="#000" size={24} />
              </Button>
            </Right>
          </Header>

          <View style={ProfileStyles.profileWrapper}>
            <LinearGradient
              style={ProfileStyles.header}
              colors={['rgba(255, 165, 0, 0.9)', 'rgba(255, 165, 0, 0.5)']}>
              <View style={ProfileStyles.innerHeader}>
                <Text
                  style={{
                    ...text.headerText,
                    ...ProfileStyles.text,
                  }}>
                  {name ? `${name?.firstName} ${name?.lastName}` : null}
                </Text>
                <Text style={{...text.textSecondary, ...ProfileStyles.text}}>
                  {email && email}
                </Text>
                <Text style={{...text.textSecondary, ...ProfileStyles.text}}>
                  (+91) {contactNo?.value.substring(0, 5)}{' '}
                  {contactNo?.value.substring(5, 10)}
                </Text>
              </View>
            </LinearGradient>

            <View style={ProfileStyles.listWrapper}>
              <List indicatorStyle="black">
                <ListItem style={ProfileStyles.listItem} noBorder>
                  <AntDesign
                    name="user"
                    size={29}
                    style={ProfileStyles.listIcon}
                  />
                  <Text style={ProfileStyles.listText}>My bookings</Text>
                </ListItem>
                <ListItem style={ProfileStyles.listItem} noBorder>
                  <AntDesign
                    name="hearto"
                    size={29}
                    style={ProfileStyles.listIcon}
                  />
                  <Text style={ProfileStyles.listText}>Saved</Text>
                </ListItem>
                <ListItem style={ProfileStyles.listItem} noBorder>
                  <AntDesign
                    name="customerservice"
                    size={29}
                    style={ProfileStyles.listIcon}
                  />
                  <Text style={ProfileStyles.listText}>Support</Text>
                </ListItem>
                <ListItem style={ProfileStyles.listItem} noBorder>
                  <AntDesign
                    name="setting"
                    size={29}
                    style={ProfileStyles.listIcon}
                  />
                  <Text style={ProfileStyles.listText}>Settings</Text>
                </ListItem>
                <ListItem style={ProfileStyles.listItem} noBorder>
                  <AntDesign
                    name="sync"
                    size={29}
                    style={ProfileStyles.listIcon}
                  />
                  <Text style={ProfileStyles.listText}>Extras</Text>
                </ListItem>
                <ListItem
                  style={ProfileStyles.listItem}
                  onPress={onUserLogout}
                  noBorder>
                  <AntDesign
                    name="logout"
                    size={29}
                    style={ProfileStyles.listIcon}
                  />
                  <Text style={ProfileStyles.listText}>Logout</Text>
                </ListItem>
              </List>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ListScreen;
