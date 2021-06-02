import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button, Icon, Item, Text } from 'native-base';
import { StatusBar } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Ripple from 'react-native-material-ripple';
import { Ionicons } from '@expo/vector-icons';

import { primaryColor } from '../../styles/colors';
import { homeStyles } from '../../styles/screens/home-screen';
import { text } from '../../styles/globals';
import { OnlyImageCard, CustomCard } from '../../components/card/Card';
import { home } from '../../constants/screens/home-screen';

import * as HomeStyled from './home.styled';

function ListHeaderComponent({}) {
  return (
    <View style={homeStyles.heroWrapper}>
      <CustomCard imageUrl={require('../assets/Home/Images/52055.jpg')} />
    </View>
  );
}

function ListFooterComponent({}) {
  return (
    <>
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
          styles={{ resizeMode: 'center' }}
        />

        <Text style={{ ...text.textSecondary }}>
          Choose service providers from locals around you to do your work. People who you can trust.
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
          styles={{ resizeMode: 'center' }}
        />

        <Text style={{ ...text.textSecondary }}>
          Free 7 days follow up for registered* for completed services. You can raise a request if
          you are not satisfied in between the time.
        </Text>
      </View>
    </>
  );
}

class HomeScreen extends Component {
  state = {
    heightFromTop: 0,
  };

  handleScroll = (event) => {
    const layout = event.nativeEvent.contentOffset.y;
    this.setState({ heightFromTop: layout });
  };

  render() {
    const { navigate } = this.props.navigation;
    const data = [
      { imageUrl: home.doctor, title: 'Doctor' },
      { imageUrl: home.electrician, title: 'Electrician' },
      { imageUrl: home.tilesWork, title: 'Tiles Worker' },
      { imageUrl: home.tutor, title: 'Tutor' },
      { imageUrl: home.plumber, title: 'Plumber' },
      { imageUrl: home.architect, title: 'Architect' },
      { imageUrl: home.tutor, title: 'Tutor' },
      { imageUrl: home.architect, title: 'Architect' },
      { imageUrl: home.plumber, title: 'Plumber' },
    ];

    return (
      <>
        <StatusBar backgroundColor={primaryColor} />
        <SafeAreaView style={{ backgroundColor: 'transparent' }}>
          <HomeStyled.TopHeader>
            <HomeStyled.GradientViewStyled colors={['#0481bb', primaryColor]} end={[1.2, 1.5]}>
              <HomeStyled.TopHeaderImage
                resizeMode="contain"
                source={require('../assets/images/header_logo_new.png')}
              />
              <HomeStyled.TopHeaderRight>
                <Button transparent style={{ marginRight: 10 }}>
                  <Ionicons
                    name={'heart-outline'}
                    size={25}
                    color="#fdfdfd"
                    onPress={() => navigate('Login')}
                  />
                </Button>
                <Button transparent>
                  <Ionicons
                    name="cart-outline"
                    size={25}
                    color="#fdfdfd"
                    onPress={() => navigate('Login')}
                  />
                </Button>
              </HomeStyled.TopHeaderRight>
            </HomeStyled.GradientViewStyled>
            {/* Header Search */}
            <HomeStyled.HomeSearch style={homeStyles.ViewHeader}>
              <Item
                onPress={() => navigate('Listing')}
                style={[
                  homeStyles.SearchBar,
                  this.state.heightFromTop > 59 ? homeStyles.searchBarOnScroll : null,
                ]}>
                <Text style={{ padding: 10, height: 45, width: '90%' }}>Search</Text>
                <Icon name="ios-search" />
              </Item>
            </HomeStyled.HomeSearch>
          </HomeStyled.TopHeader>

          <View
            style={{
              marginTop: 10,
              backgroundColor: '#fff',
            }}>
            <FlatGrid
              scrollEnabled
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={
                <>
                  <ListHeaderComponent />
                  <Text style={text.headerText}>All services</Text>
                  <Text style={text.textSecondary}>Select a service to view more categories</Text>
                </>
              }
              ListFooterComponent={<ListFooterComponent />}
              itemDimension={100}
              data={data}
              key={({ item }) => item.title}
              renderItem={({ item }) => (
                <View>
                  <OnlyImageCard
                    imageUrl={item.imageUrl}
                    title={item.title}
                    onClick={() => navigate('Listing')}
                  />
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default HomeScreen;
