import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import GoogleMaps from '../../components/GoogleMaps';

const index = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
          color: '#000',
        }}>
        <View>
          <GoogleMaps />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
