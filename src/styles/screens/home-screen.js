import {StyleSheet} from 'react-native';
import {lightTheme, primaryColor, secondaryColor} from '../colors';
import {text} from '../globals';

export const homeStyles = StyleSheet.create({
  cardsWrapper: {
    width: '100%',
  },
  Container: {
    backgroundColor: 'transparent',
    paddingTop: 10,
    flex: 1,
    marginTop: 10,
  },
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
  header: {
    backgroundColor: 'transparent',
    height: 100,
    elevation: 0,
    zIndex: 11,
  },
  ViewHeader: {
    width: '100%',
    backgroundColor: 'transparent',
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
    zIndex: 1111,
    shadowColor: '#eee',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 25,
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
});
