import {Dimensions, StyleSheet} from 'react-native';
import * as colors from '../../styles/colors';

export const gridStyles = StyleSheet.create({
  gridWrapper: {
    height: '100%',
    width: '100%',
    // padding: 10,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
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
    backgroundColor: 'rgba(238, 238, 238, 0.1)',
    width: '100%',
    marginBottom: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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

export const styles = StyleSheet.create({
  scrollView: {
    maxHeight: '100%',
    backgroundColor: '#fff',
  },
  header: {backgroundColor: '#fff'},
  searchLabelText: {
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 15,
    color: colors.textColors.secondary,
  },
  searchText: {
    color: colors.primaryDarkColor,
  },
  backButton: {
    maxWidth: '10%',
  },
  searchInput: {
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  searchButton: {
    borderColor: '#eee',
    // backgroundColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginVertical: 0,
    height: 40,
  },
  searchSuggestion: {
    marginBottom: 10,
    padding: 10,
  },
  tagsWrapper: {
    flex: 1,
    maxHeight: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colors.textColors.primary,
  },
  tag: {
    maxHeight: '100%',
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    borderColor: colors.borderColor,
  },
});
