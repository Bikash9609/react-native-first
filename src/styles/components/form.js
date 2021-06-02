import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/components/colors';

export const authForm = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: 30,
    padding: 10,
  },
  regularInput: {
    marginLeft: 0,
    borderRadius: 10,
    backgroundColor: '#eee',
    paddingLeft: 10,
  },
  label: {},
  input: {
    paddingLeft: 0,

    // backgroundColor: '#eee',
  },
  errorWrapper: {
    marginBottom: 20,
    marginTop: 5,
  },
  errorFeedback: {
    fontSize: 14,
    // marginBottom: 20,
    color: 'red',
  },
  dividers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    marginVertical: 30,
  },
  divider: {
    height: 2,
    backgroundColor: 'rgba(204, 204, 204, 0.5)',
    width: '100%',
    marginHorizontal: 10,
  },
  socialLoginsWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  },
});

export const signupForm = StyleSheet.create({});
