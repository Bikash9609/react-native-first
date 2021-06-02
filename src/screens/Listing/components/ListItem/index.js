import React from 'react';
import { Text } from 'react-native';
import { ListItem, Left, Right } from 'native-base';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { styles } from './style';

export default function index({ text }) {
  return (
    <ListItem selected>
      <Left>
        <AntDesign style={styles.listLeftIcon} name="search1" size={19} />
        <Text style={styles.listBodyText}>{text}</Text>
      </Left>
      <Right>
        <Entypo name="chevron-right" size={19} />
      </Right>
    </ListItem>
  );
}
