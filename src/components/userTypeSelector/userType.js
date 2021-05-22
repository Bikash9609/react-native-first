import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Radio} from 'native-base';
import {UserType} from '../../styles/components/userType';

const userType = () => {
  const [signupType, setSignupType] = useState('customer');

  const toggleSingupTypeHandler = (type) => {
    setSignupType(type);
  };
  return (
    <View style={UserType.radios}>
      <TouchableOpacity
        style={[
          UserType.listItems,
          signupType === 'seller' && UserType.activeRadio,
        ]}
        onPress={() => toggleSingupTypeHandler('seller')}>
        <View>
          <Text style={UserType.listHeader}>I am a seller</Text>
          <Text>If you want to sell a service click here.</Text>
        </View>

        <Radio
          color={'#ccc'}
          selectedColor={'#19B5FE'}
          onPress={() => toggleSingupTypeHandler('seller')}
          selected={signupType === 'seller' && true}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          UserType.listItems,
          signupType === 'customer' && UserType.activeRadio,
        ]}
        onPress={() => toggleSingupTypeHandler('customer')}>
        <View>
          <Text style={UserType.listHeader}>I am a buyer</Text>
          <Text>If you want to buy / rent a service click here.</Text>
        </View>

        <Radio
          color={'#ccc'}
          selectedColor={'#19B5FE'}
          onPress={() => toggleSingupTypeHandler('customer')}
          selected={signupType === 'customer' && true}
        />
      </TouchableOpacity>
    </View>
  );
};

export default userType;
