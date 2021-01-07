import React from 'react';
import {
  View,
  Text,
  Form,
  Input,
  Item,
  Label,
  Icon,
  Container,
  Button,
} from 'native-base';
import {AntDesign} from '@expo/vector-icons';

// Styles
import {authForm} from '../../styles/components/form';
import {buttonStyles} from '../../styles/components/button';
import {primaryColor, secondaryColor} from '../../styles/components/colors';

const form = () => {
  return (
    <View>
      <Form style={authForm.wrapper}>
        <Item stackedLabel regular style={authForm.regularInput} fixedLabel>
          <Label style={authForm.label}>Email</Label>
          <Input textContentType="emailAddress" style={authForm.input} />
        </Item>
        <View style={authForm.errorWrapper}>
          <Text style={authForm.errorFeedback}>
            This is an error feedback text.
          </Text>
          <Text style={authForm.errorFeedback}>Minimum length is 2.</Text>
        </View>

        <Item
          stackedLabel
          regular
          style={{...authForm.regularInput, ...authForm.regularInput_Error}}
          fixedLabel>
          <Label style={authForm.label}>Password</Label>
          <Input textContentType="emailAddress" style={authForm.input} />
        </Item>
        <View style={authForm.errorWrapper}>
          <Text style={authForm.errorFeedback}>
            This is an error feedback text.
          </Text>
          <Text style={authForm.errorFeedback}>Minimum length is 2.</Text>
        </View>

        <Button
          style={{
            ...buttonStyles.primary,
            backgroundColor: primaryColor,
          }}
          large
          full>
          <Text>Submit</Text>
        </Button>
      </Form>
    </View>
  );
};

export default form;
