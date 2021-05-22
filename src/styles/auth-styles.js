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
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  // Auth screen text
  mainText: {
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 10,
    color: 'rgba(255, 255, 255, 0.9)',
  },
});

export const EmailAuthStyles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
  tabs: {
    backgroundColor: '#fff',
  },
});
