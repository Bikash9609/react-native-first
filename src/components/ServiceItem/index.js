import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as colors from '../../styles/colors';
import Button from '../Button/';

const Index = ({
  specialPrice,
  price,
  description,
  name,
  limitText = 20,
  onAdd,
  isAdded,
  wrapperStyle,
}) => {
  // Limit text is per day or per month or per year
  return (
    <View style={[styles().wrapper, wrapperStyle]}>
      <View style={styles().leftWrapper}>
        <View>
          <MaterialCommunityIcons
            name="crown-outline"
            size={19}
            color="black"
            style={styles().icon}
          />
        </View>
        <View style={styles().textWrapper}>
          <Text style={styles().serviceText}>{name}</Text>
          <Text style={styles().serviceDescription}>{description}</Text>
        </View>
      </View>
      <View style={styles().buttonWrapper}>
        <Text style={styles().serviceCharge}>
          ₹{parseFloat(specialPrice).toFixed(2).replace('.00', '')} / day
        </Text>
        <Button
          inverted
          buttonStyle={styles({ isAdded }).button}
          textStyle={styles({ isAdded }).buttonText}
          onPress={onAdd}>
          {isAdded ? 'Remove' : 'Add service'}
        </Button>
      </View>
    </View>
  );
};

export default Index;

const styles = (props) =>
  StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      marginBottom: 10,
      paddingVertical: 15,
      borderRadius: 20,

      borderBottomWidth: 1,
      borderColor: '#eee',
    },

    leftWrapper: {
      maxWidth: '60%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    icon: {
      color: '#fff',
      marginRight: 10,
      backgroundColor: colors.primaryColor,
      borderRadius: 10,
      padding: 2,
    },

    textWrapper: {
      paddingRight: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    serviceText: {
      color: colors.textColors.primary,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: 5,
    },
    serviceDescription: {
      fontSize: 12,
      color: colors.textColors.secondaryLight,
      paddingRight: 5,
      fontWeight: '300',
      marginBottom: 10,
    },

    buttonWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      maxWidth: '40%',
    },
    button: {
      padding: 0,
      alignSelf: 'flex-end',
      borderColor: props?.isAdded ? 'transparent' : colors.primaryColor,
    },
    buttonText: {
      color: props?.isAdded ? '#FF0000' : colors.primaryColor,
      fontSize: props?.isAdded ? 15 : 16,
    },

    serviceCharge: {
      marginBottom: 10,
      textAlign: 'center',
      width: '100%',
      fontSize: 14,
    },
  });
