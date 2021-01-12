import React, {useState} from 'react';
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
  ListItem,
  Left,
  Right,
  Radio,
  Body,
} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {LinearGradient} from 'expo-linear-gradient';
import {ScrollView} from 'react-native';

// ICONS
import {AntDesign} from '@expo/vector-icons';

// STYLES
import {authForm, signupForm} from '../../styles/components/form';
import {buttonStyles, socialButtonStyles} from '../../styles/components/button';
import {primaryColor} from '../../styles/components/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

// COMPONENTS
import UserTypeSelector from '../../components/userTypeSelector';

// REGEX
const EMAIL_VALIDATION_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_VALIDATION_REGEX = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*])(?=.{8,})',
);

export const LoginForm = () => {
  const {control, handleSubmit, errors} = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <ScrollView>
      <UserTypeSelector />

      <Form style={authForm.wrapper}>
        <Item
          stackedLabel
          regular
          style={authForm.regularInput}
          fixedLabel
          error={errors.email && true}>
          <Label style={authForm.label}>Email</Label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Please enter a valid email address.',
              },
              pattern: {
                value: EMAIL_VALIDATION_REGEX,
                message: 'Please enter a valid email address.',
              },
            }}
            render={({onChange, value}) => (
              <Input
                textContentType="emailAddress"
                style={authForm.input}
                defaultValue=""
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />
        </Item>
        {errors.email ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>{errors.email.message}</Text>
          </View>
        ) : (
          <View style={{marginBottom: 25}}></View>
        )}
        <Item
          stackedLabel
          regular
          style={{...authForm.regularInput}}
          fixedLabel
          error={errors.password && true}>
          <Label style={authForm.label}>Password</Label>
          <Controller
            name="password"
            rules={{
              required: {
                value: true,
                message: 'Please write a valid password.',
              },
              minLength: {
                value: 8,
                message: 'Password must be 8 or more characters long.',
              },
              maxLength: 80,
              pattern: {
                value: PASSWORD_VALIDATION_REGEX,
                message: 'Password must be strong.',
              },
            }}
            control={control}
            render={({onChange, value}) => (
              <Input
                textContentType="password"
                style={authForm.input}
                autoCompleteType={'email'}
                defaultValue=""
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />
        </Item>
        {errors.password ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>
              {errors.password.message}
            </Text>
            <Text style={authForm.errorFeedback}>
              Note: Use at least 1 capital letter, lowercase letter, special
              character ( (?=.*?[#?!@$%^&*-] ) and a numeric character.
            </Text>
          </View>
        ) : (
          <View style={{marginBottom: 25}}></View>
        )}

        <Button
          style={{
            ...buttonStyles.primary,
            backgroundColor: primaryColor,
          }}
          large
          onPress={handleSubmit(formSubmitHandler)}
          full>
          <Text>Submit</Text>
        </Button>
      </Form>

      <View style={authForm.dividers}>
        <View style={authForm.divider}></View>
        <Text>OR</Text>
        <View style={authForm.divider}></View>
      </View>

      <View style={authForm.socialLoginsWrapper}>
        <Button
          iconLeft
          style={socialButtonStyles.google}
          full
          activeOpacity={0.8}>
          <AntDesign name="google" size={24} color={'#fff'} />
          <Text>Google</Text>
        </Button>
        <Button
          style={socialButtonStyles.facebook}
          iconLeft
          full
          activeOpacity={0.8}>
          <AntDesign name="facebook-square" size={24} color={'#fff'} />
          <Text>Facebook</Text>
        </Button>
        <Button
          style={socialButtonStyles.twitter}
          iconLeft
          full
          activeOpacity={0.8}>
          <AntDesign name="twitter" size={24} color={'#fff'} />
          <Text>Twitter</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export const SignupForm = () => {
  const {control, handleSubmit, errors} = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <ScrollView>
      <UserTypeSelector />
      <Form style={authForm.wrapper}>
        <Item
          stackedLabel
          regular
          style={authForm.regularInput}
          fixedLabel
          error={errors.email && true}>
          <Label style={authForm.label}>Email</Label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Please enter a valid email address.',
              },
              pattern: {
                value: EMAIL_VALIDATION_REGEX,
                message: 'Please enter a valid email address.',
              },
            }}
            render={({onChange, value}) => (
              <Input
                textContentType="emailAddress"
                style={authForm.input}
                defaultValue=""
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />
        </Item>
        {errors.email ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>{errors.email.message}</Text>
          </View>
        ) : (
          <View style={{marginBottom: 25}}></View>
        )}
        <Item
          stackedLabel
          regular
          style={{...authForm.regularInput}}
          fixedLabel
          error={errors.password && true}>
          <Label style={authForm.label}>Password</Label>
          <Controller
            name="password"
            rules={{
              required: {
                value: true,
                message: 'Please write a valid password.',
              },
              minLength: {
                value: 8,
                message: 'Password must be 8 or more characters long.',
              },
              maxLength: 80,
              pattern: {
                value: PASSWORD_VALIDATION_REGEX,
                message: 'Password must be strong.',
              },
            }}
            control={control}
            render={({onChange, value}) => (
              <Input
                textContentType="password"
                style={authForm.input}
                value={value}
                defaultValue=""
                onChangeText={(text) => onChange(text)}
              />
            )}
          />
        </Item>
        {errors.password ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>
              {errors.password.message}
            </Text>
            <Text style={authForm.errorFeedback}>
              Note: Use at least 1 capital letter, lowercase letter, special
              character ( (?=.*?[#?!@$%^&*-] ) and a numeric character.
            </Text>
          </View>
        ) : (
          <View style={{marginBottom: 25}}></View>
        )}

        <Button
          style={{
            ...buttonStyles.primary,
            backgroundColor: primaryColor,
          }}
          large
          onPress={handleSubmit(formSubmitHandler)}
          full>
          <Text>Submit</Text>
        </Button>
      </Form>

      <View style={authForm.dividers}>
        <View style={authForm.divider}></View>
        <Text>OR</Text>
        <View style={authForm.divider}></View>
      </View>

      <View style={authForm.socialLoginsWrapper}>
        <Button
          iconLeft
          style={socialButtonStyles.google}
          full
          activeOpacity={0.8}>
          <AntDesign name="google" size={24} color={'#fff'} />
          <Text>Google</Text>
        </Button>
        <Button
          style={socialButtonStyles.facebook}
          iconLeft
          full
          activeOpacity={0.8}>
          <AntDesign name="facebook-square" size={24} color={'#fff'} />
          <Text>Facebook</Text>
        </Button>
        <Button
          style={socialButtonStyles.twitter}
          iconLeft
          full
          activeOpacity={0.8}>
          <AntDesign name="twitter" size={24} color={'#fff'} />
          <Text>Twitter</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
