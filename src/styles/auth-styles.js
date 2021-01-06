import {StyleSheet} from 'react-native';

export const MainContent = StyleSheet.create({
  Wrapper: {
    height: '100%',
    width: '100%',
    opacity: 1,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#ccc',
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexWrap: 'wrap',

    width: '100%',
    height: '100%',
    paddingTop: 20,
    borderRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },

  Header: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 19,
  },
});
