import {StyleSheet} from 'react-native';
import {primaryColor} from '../../styles/components/colors';

export const authForm = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: 30,
    padding: 10,
  },
  regularInput: {
    marginLeft: 0,
    marginBottom: 0,
    borderRadius: 10,
    backgroundColor: '#eee',
    paddingLeft: 10,
  },
  regularInput_Error: {
    borderWidth: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.05)',
    borderColor: 'red',
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
});
