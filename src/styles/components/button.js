import { StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/components/colors';

export const buttonStyles = StyleSheet.create({
  primary: {
    marginVertical: 10,
    // marginHorizontal: 5,
    borderRadius: 7,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'transparent',
    color: '#fff',
    elevation: 20,
  },
});

// export default buttonStyles;

export const socialButtonStyles = StyleSheet.create({
  google: {
    ...buttonStyles.primary,
    backgroundColor: '#DB4437',
    paddingTop: 30,
    paddingBottom: 30,
    elevation: 4,
  },
  facebook: {
    ...buttonStyles.primary,
    backgroundColor: '#3b5998',
    paddingTop: 30,
    paddingBottom: 30,
    elevation: 4,
  },
  twitter: {
    ...buttonStyles.primary,
    backgroundColor: '#1DA1F2',
    paddingTop: 30,
    paddingBottom: 30,
    elevation: 4,
  },
});
