import {StyleSheet} from 'react-native';
import {
  textColors,
  iconBgColor,
  bgColored,
  primaryColor,
  secondaryColor,
  borderColor,
} from '../colors';

export const ProfileStyles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: '#fff',
  },
  backDrop: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
    width: '100%',
    backgroundColor: 'rgba(0, 162, 255, 0)',
    paddingHorizontal: 10,
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 30,
    padding: 20,
  },

  authButton: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#dedede',
    borderWidth: 1,
    borderStyle: 'solid',
    elevation: 0,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
    maxHeight: '100%',
    marginBottom: 10,
  },
  authIcon: {
    color: '#fff',
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 50,
  },
  authButtonText: {
    color: textColors.primary,
    marginLeft: -25,
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
    backgroundColor: 'rgba(222, 222, 222, 0.8)',
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
  listIcon: {
    padding: 10,
    backgroundColor: iconBgColor,
    borderRadius: 20,
    marginRight: 10,
    color: textColors.secondary,
  },
  listText: {
    fontSize: 16,
    fontWeight: '400',
    color: textColors.secondary,
  },
});
