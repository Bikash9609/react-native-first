import {StyleSheet} from 'react-native';
import {lightTheme, primaryColor, secondaryColor} from '../colors';
import {text} from '../globals';

export const homeStyles = StyleSheet.create({
  cardsWrapper: {
    width: '100%',
  },

  // Top header
  header: {
    backgroundColor: 'transparent',
    height: 50,
    elevation: 0,
    zIndex: 11,
    marginBottom: 10,
  },
  headerLogo: {
    padding: 10,
    resizeMode: 'center',
    width: 200,
    height: 100,
    marginLeft: -50,
  },

  // Top header - search bar
  ViewHeader: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  SearchBar: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -10,
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 10,
    color: '#ccc',
    borderRadius: 7,
    zIndex: 1111,
    shadowColor: '#eee',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 125,
  },

  searchBarOnScroll: {
    paddingVertical: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0,
    // backgroundColor: 'red',
  },
  HeaderSearch: {
    color: 'rgba(0,0,0,0.7)',
  },

  // Home main content
  Container: {
    backgroundColor: 'transparent',
    flex: 1,
  },

  // Content - Hero
  heroWrapper: {
    backgroundColor: '#fff',
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
    fontSize: text.textHeaderSize,
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
});
