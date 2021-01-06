import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Container,
  Button,
  Footer,
  FooterTab,
  Icon,
  Header,
  Left,
  Body,
  Title,
  Right,
  Item,
  Input,
} from 'native-base';
import Card from '../components/card/Card';

// import Carousel from '../components/carousel/carousel';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#eee',
  },
  footer: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderTopWidth: 1,
  },
  main: {
    // height: "93%",
  },
  text: {
    fontSize: 21,
    padding: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    padding: 7,
    textAlign: 'center',
    backgroundColor: 'red',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 40,
    width: '40%',
    fontSize: 19,
    color: '#fff',
  },
  header: {
    backgroundColor: 'orange',
    height: 100,
    elevation: 0,
    zIndex: 11,
  },
  SearchBar: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -20,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#ccc',
    borderRadius: 10,
    elevation: 20,
    zIndex: 1111,
  },
  ViewHeader: {
    // flex: 1,
    width: '100%',
  },
  HeaderSearch: {
    color: 'rgba(0,0,0,0.7)',
  },
  Content: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 10,
    height: '100%',
  },
});

class HomeScreen extends Component {
  navigationOptions = {
    headerShown: true,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={styles.Container}>
        <Header
          androidStatusBarColor="orange"
          rounded
          noLeft
          style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="menu" onPress={() => navigate('Login')} />
            </Button>
          </Right>
        </Header>
        <View style={styles.ViewHeader}>
          <Item style={styles.SearchBar}>
            <Input placeholder="Search" style={styles.HeaderSearch} />
            <Icon name="ios-search" />
          </Item>
        </View>

        <View style={styles.Content}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
            style={{borderRadius: 30, borderColor: '#eee ', flex: 1}}>
            <Text style={styles.text}>Service at your door step</Text>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </Container>
    );
  }
}

export default HomeScreen;
