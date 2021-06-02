import { StyleSheet } from 'react-native';
import {
  textColors,
  iconBgColor,
  bgColored,
  primaryColor,
  secondaryColor,
  borderColor,
  primaryLightColor,
} from '../colors';

export const ProfileStyles = StyleSheet.create({
  headerText: {
    paddingLeft: 10,
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    height: '100%',
    backgroundColor: '#fff',
  },
  backDrop: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgba(0, 162, 255, 0)',
  },

  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignSelf: 'center',
    marginTop: '50%',
    width: 200,
    height: 100,
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 20,
    borderRadius: 20,
  },
  logoImage: {
    width: '100%',
    height: 100,
  },

  innerWrapper: {
    borderRadius: 30,
    padding: 20,
  },

  authIcon: {
    color: primaryColor,
  },
  authButtonText: {
    color: textColors.primary,
    fontWeight: '400',
    fontSize: 19,
    textAlign: 'center',
  },

  scrollView: {
    height: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
  },

  profileWrapper: {
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: '#eee',
    backgroundColor: '#87d3fc',
    height: 240,
    paddingHorizontal: 20,
  },
  innerHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 30,
    width: '100%',
  },

  text: {
    marginHorizontal: 15,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 2,
    marginLeft: 15,
  },

  listWrapper: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    marginTop: -50,
  },
  listItem: {},
  iconWrapper: {
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: primaryLightColor,
    maxWidth: '100%',
    marginRight: 10,
  },
  listIcon: {
    padding: 10,
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    color: textColors.secondary,
  },
  listText: {
    fontSize: 16,
    fontWeight: '400',
    color: textColors.secondary,
  },
});
