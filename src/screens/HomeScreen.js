import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  Container,
  Button,
  Icon,
  Header,
  Body,
  Right,
  Item,
  Input,
  Left,
  Text,
  Col,
} from 'native-base';
import {StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {FlatGrid} from 'react-native-super-grid';
import Ripple from 'react-native-material-ripple';
import {Ionicons} from '@expo/vector-icons';

import {
  lightTheme,
  primaryColor,
  secondaryColor,
} from '../styles/components/colors';
import {homeStyles} from '../styles/screens/home-screen';
import {text} from '../styles/globals';
import {OnlyImageCard, CustomCard} from '../components/card/Card';
import {urls} from '../constants/Globals';
import {home} from '../constants/screens/home-screen';
import {color} from 'react-native-reanimated';

class HomeScreen extends Component {
  state = {
    heightFromTop: 0,
  };

  handleScroll = (event) => {
    const layout = event.nativeEvent.contentOffset.y;
    this.setState({heightFromTop: layout});
  };

  render() {
    const {navigate} = this.props.navigation;
    const data = [
      {imageUrl: home.doctor, title: 'Doctor'},
      {imageUrl: home.electrician, title: 'Electrician'},
      {imageUrl: home.tilesWork, title: 'Tiles Worker'},
      {imageUrl: home.tutor, title: 'Tutor'},
      {imageUrl: home.plumber, title: 'Plumber'},
      {imageUrl: home.architect, title: 'Architect'},
      {imageUrl: home.tutor, title: 'Tutor'},
      {imageUrl: home.architect, title: 'Architect'},
      {imageUrl: home.plumber, title: 'Plumber'},
    ];

    return (
      <Container style={{backgroundColor: 'transparent'}}>
        <StatusBar backgroundColor={primaryColor} />
        {/* Header */}
        <View
          style={{
            position: 'absolute',
            zIndex: 111,
            width: '100%',
            backgroundColor: 'transparent',
          }}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 1)', primaryColor]}
            end={[1.3, 0.7]}>
            <Header
              androidStatusBarColor={primaryColor}
              rounded
              // noLeft
              style={homeStyles.header}>
              <Left>
                <Image
                  source={{
                    uri: urls.LOGO_URL,
                  }}
                  style={homeStyles.headerLogo}
                />
              </Left>
              <Body></Body>
              <Right>
                <Button transparent>
                  <Ionicons
                    name={'heart-outline'}
                    size={24}
                    color="#fdfdfd"
                    onPress={() => navigate('Login')}
                  />
                </Button>
                <Button transparent>
                  <Ionicons
                    name="cart-outline"
                    size={24}
                    color="#fdfdfd"
                    onPress={() => navigate('Login')}
                  />
                </Button>
              </Right>
            </Header>
          </LinearGradient>
          {/* Header Search */}
          <View style={homeStyles.ViewHeader}>
            <Item
              style={[
                homeStyles.SearchBar,
                this.state.heightFromTop > 59
                  ? homeStyles.searchBarOnScroll
                  : null,
              ]}>
              <Input placeholder="Search" style={homeStyles.HeaderSearch} />
              <Icon name="ios-search" />
            </Item>
          </View>
        </View>
        {/* Header Ends */}

        {/* Main Content */}
        <ScrollView
          onScroll={this.handleScroll}
          style={homeStyles.Container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{height: 120, backgroundColor: '#eee'}}></View>

          {/* Hero */}
          <View style={homeStyles.heroWrapper}>
            <CustomCard imageUrl={require('../assets/Home/Images/52055.jpg')} />
          </View>
          {/* Hero Ends */}

          <SafeAreaView
            style={{
              marginTop: 10,
              backgroundColor: '#fff',
            }}>
            <FlatGrid
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={
                <>
                  <Text style={text.headerText}>All services</Text>
                  <Text style={text.textSecondary}>
                    Select a service to view more categories
                  </Text>
                </>
              }
              itemDimension={120}
              data={data}
              renderItem={({item}) => (
                <View>
                  <OnlyImageCard
                    imageUrl={item.imageUrl}
                    title={item.title}
                    onClick={() => navigate('Listing')}
                  />
                </View>
              )}
            />
          </SafeAreaView>

          <View
            style={{
              flex: 1,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: '#fff',
            }}>
            <Text style={text.headerText}>Local people from around you</Text>
            <CustomCard
              imageUrl={require('../assets/Home/Images/4011311.jpg')}
              styles={{resizeMode: 'center'}}
            />

            <Text style={{...text.textSecondary}}>
              Choose service providers from locals around you to do your work.
              People who you can trust.
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              marginBottom: 10,
              backgroundColor: '#fff',
            }}>
            <Text style={text.headerText}>7 days free follow-up</Text>
            <CustomCard
              imageUrl={require('../assets/Home/Images/4011311.jpg')}
              styles={{resizeMode: 'center'}}
            />

            <Text style={{...text.textSecondary}}>
              Free 7 days follow up for registered* for completed services. You
              can raise a request if you are not satisfied in between the time.
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default HomeScreen;
