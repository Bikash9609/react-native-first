import { StyleSheet } from 'react-native';

export const UserType = StyleSheet.create({
  radios: {
    margin: 10,
    marginBottom: 0,
    marginTop: 20,
  },
  listItems: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  activeRadio: {
    backgroundColor: 'rgba(25, 181, 254, 0.1)',
    borderColor: 'rgba(25, 181, 254, 0.9)',
  },
});
