import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

import * as colors from '../../styles/colors';

function Index({
  children,
  buttonStyle,
  textStyle,
  boldText,
  biggerFont,
  upperCase,
  elevation,
  disabled,
  inverted,
  ...rest
}) {
  return (
    <Button
      style={[
        inverted
          ? styles({boldText, elevation, disabled}).inverted
          : styles({boldText, elevation, disabled}).button,
        buttonStyle,
      ]}
      disabled={disabled}
      {...rest}>
      <Text
        style={[
          inverted
            ? styles({boldText, biggerFont, upperCase}).invertedText
            : styles({boldText, biggerFont, upperCase}).buttonText,
          textStyle,
        ]}>
        {children}
      </Text>
    </Button>
  );
}

export default Index;

export const styles = (props) =>
  StyleSheet.create({
    inverted: {
      backgroundColor: props?.disabled ? '#eee' : '#fff',
      borderRadius: 7,
      padding: 10,
      paddingHorizontal: 0,
      elevation: props?.elevation ? 1 : 0,
      borderWidth: 1,
      borderColor: colors.primaryColor,
    },
    invertedText: {
      fontWeight: props?.boldText ? '600' : 'normal',
      fontSize: props?.biggerFont ? 19 : 16,
      textTransform: props?.upperCase ? 'uppercase' : 'capitalize',
      color: colors.primaryColor,
    },

    button: {
      backgroundColor: props?.disabled
        ? colors.primaryLightColor
        : colors.primaryColor,
      borderRadius: 7,
      padding: 10,
      paddingHorizontal: 0,
      elevation: props?.elevation ? 1 : 0,
    },
    buttonText: {
      fontWeight: props?.boldText ? '600' : 'normal',
      fontSize: props?.biggerFont ? 19 : 16,
      textTransform: props?.upperCase ? 'uppercase' : 'capitalize',
    },
  });
