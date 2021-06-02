import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import * as coreActions from '../../store/core/reducers';

const MAPS_API_KEY = 'AIzaSyCvhvzKTxZANe_B3tapYFxgrqYbLqqC-sk';

const Index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }));

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  const onNewPlaceClick = (data, details) => {
    if (data && data.geometry && data.formatted_address) {
      dispatch(coreActions.setLocation(data));
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
      navigation.navigate('Home');
    }
  };

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Type to search your location"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          onNewPlaceClick(data, details);
        }}
        getDefaultValue={(value) => ''}
        query={{
          key: MAPS_API_KEY,
          language: 'en',
          components: 'country:in',
        }}
        textInputProps={{ autoFocus: true }}
        renderDescription={(row) => row.description || row.formatted_address || row.name}
        isRowScrollable
        currentLocation={true}
        currentLocationLabel="Current location"
        renderRightButton={() => (
          <View
            style={{
              backgroundColor: '#fff',
              borderTopRightRadius: 10,
              padding: 10,
              height: 54,
              borderWidth: 1,
              borderLeftWidth: 0,
              borderColor: '#ccc',
              borderBottomRightRadius: 10,
            }}>
            <AntDesign name="search1" size={29} style={{ color: '#000000a1' }} />
          </View>
        )}
        enablePoweredByContainer
        debounce={700}
        minLength={1} // minimum length of text to search
        returnKeyType={'search'}
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={false}
        GooglePlacesDetailsQuery={{
          fields: ['formatted_address', 'geometry'],
        }}
        nearbyPlacesAPI="GoogleReverseGeocoding"
        styles={styles}
        enableHighAccuracyLocation
        predefinedPlaces={[workPlace, homePlace]}
        predefinedPlacesAlwaysVisible={true}
      />
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    minWidth: '100%',
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    height: 54,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 15,
    flex: 1,
    marginBottom: 10,
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#c8c7cc',
    borderTopWidth: 0.5,
  },
  powered: {},
  row: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    height: 44,
    flexDirection: 'row',
    borderRadius: 5,
    color: '#000',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
};

export default Index;
