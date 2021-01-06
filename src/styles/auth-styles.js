import {StyleSheet} from 'react-native';
import colors from '../styles/components/colors';

export const MainContent = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    opacity: 1,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#ccc',
  },
  //Auth mode buttons
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#148bcf',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    // borderRadius: 30,
    // borderTopEndRadius: 30,
    // borderTopStartRadius: 30,
    // bottom: 0,
  },
  // Auth screen text
  mainText: {
    fontSize: 60,
    fontWeight: '700',
    marginBottom: 50,
    color: 'rgba(0, 0, 0, 0.9)',
  },
});
