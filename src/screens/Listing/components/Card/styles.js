import { Dimensions, StyleSheet } from 'react-native';
import * as colors from 'styles/colors';

export const gridStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  gridHeaderLeft: {
    fontWeight: 'bold',
    color: colors.textColors.primary,
  },
  gridHeaderRight: {
    color: colors.textColors.secondaryLight,
    fontSize: 14,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 10,
    borderColor: '#eee',
    borderWidth: 1,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '30%',
    maxHeight: '100%',
    padding: 10,
  },
  avatar: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  right: {
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    maxWidth: '70%',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textColors.primary,
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
  },
  ratingView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  ratingText: {
    marginLeft: 5,
    color: colors.primaryDarkColor,
  },
  description: {
    color: colors.textColors.secondary,
    marginBottom: 5,
  },
});
