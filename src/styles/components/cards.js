import {StyleSheet} from 'react-native';
import {lightTheme, primaryColor, secondaryColor} from './colors';

export const OnlyImageCardStyles = StyleSheet.create({
  wrapper: {
    elevation: 2,
    borderRadius: 25,
    width: null,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 20,
    borderBottomWidth: 1,
  },
  cardBody: {
    elevation: 0,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  text: {
    textAlign: 'center',
    width: '100%',
    paddingBottom: 0,
    fontSize: 14,
    color: lightTheme.textColor,
  },
});

export const CustomCardStyles = StyleSheet.create({
  wrapper: {
    borderRadius: 0,
    marginTop: 10,
    marginBottom: 10,
    elevation: 0,
    borderColor: 'transparent',
  },
  cardBody: {},
});
