import React from 'react';
import { View, Text, Form, Input, Item, Button } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { authForm } from '../../styles/components/form';
import { buttonStyles, socialButtonStyles } from '../../styles/components/button';
import { primaryColor } from '../../styles/components/colors';

// REGEX
const EMAIL_VALIDATION_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_VALIDATION_REGEX = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*])(?=.{8,})',
);

export const LoginForm = ({ onSubmit }) => {
  const { control, handleSubmit, errors } = useForm();

  const formSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <ScrollView>
      <Form style={authForm.wrapper}>
        <Item
          regular
          style={authForm.regularInput}
          placeholder="Email"
          error={errors.email && true}>
          <Controller
            name="email"
            defaultValue=""
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
            render={({ onChange, value }) => (
              <Input
                textContentType="emailAddress"
                style={authForm.input}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
        </Item>
        {errors.email ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>{errors.email.message}</Text>
          </View>
        ) : (
          <View style={{ marginBottom: 25 }}></View>
        )}
        <Item style={{ ...authForm.regularInput }} error={errors.password && true}>
          <Controller
            name="password"
            defaultValue=""
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
              // pattern: {
              //   value: PASSWORD_VALIDATION_REGEX,
              //   message: 'Password must be strong.',
              // },
            }}
            control={control}
            render={({ onChange, value }) => (
              <Input
                textContentType="password"
                style={authForm.input}
                autoCompleteType={'email'}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Password"
                keyboardType="visible-password"
                secureTextEntry
                autoCapitalize="none"
              />
            )}
          />
        </Item>
        {errors.password ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>{errors.password.message}</Text>
            <Text style={authForm.errorFeedback}>
              Note: Use at least 1 capital letter, lowercase letter, special character (
              (?=.*?[#?!@$%^&*-] ) and a numeric character.
            </Text>
          </View>
        ) : (
          <View style={{ marginBottom: 25 }}></View>
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
        <Button iconLeft style={socialButtonStyles.google} full activeOpacity={0.8}>
          <AntDesign name="google" size={24} color={'#fff'} />
          <Text>Google</Text>
        </Button>
        <Button style={socialButtonStyles.facebook} iconLeft full activeOpacity={0.8}>
          <AntDesign name="facebook-square" size={24} color={'#fff'} />
          <Text>Facebook</Text>
        </Button>
        <Button style={socialButtonStyles.twitter} iconLeft full activeOpacity={0.8}>
          <AntDesign name="twitter" size={24} color={'#fff'} />
          <Text>Twitter</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export const SignupForm = () => {
  const { control, handleSubmit, errors } = useForm();

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <ScrollView>
      <Form style={authForm.wrapper}>
        <Item style={authForm.regularInput} error={errors.email && true}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
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
            render={({ onChange, value }) => (
              <Input
                textContentType="emailAddress"
                style={authForm.input}
                defaultValue=""
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Email"
                autoCapitalize="none"
              />
            )}
          />
        </Item>
        {errors.email ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>{errors.email.message}</Text>
          </View>
        ) : (
          <View style={{ marginBottom: 25 }}></View>
        )}
        <Item last style={{ ...authForm.regularInput }} error={errors.password && true}>
          <Controller
            name="password"
            defaultValue=""
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
            render={({ onChange, value }) => (
              <Input
                textContentType="password"
                style={authForm.input}
                value={value}
                defaultValue=""
                onChangeText={(text) => onChange(text)}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
              />
            )}
          />
        </Item>
        {errors.password ? (
          <View style={authForm.errorWrapper}>
            <Text style={authForm.errorFeedback}>{errors.password.message}</Text>
            <Text style={authForm.errorFeedback}>
              Note: Use at least 1 capital letter, lowercase letter, special character (
              (?=.*?[#?!@$%^&*-] ) and a numeric character.
            </Text>
          </View>
        ) : (
          <View style={{ marginBottom: 25 }}></View>
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
        <Button iconLeft style={socialButtonStyles.google} full activeOpacity={0.8}>
          <AntDesign name="google" size={24} color={'#fff'} />
          <Text>Google</Text>
        </Button>
        <Button style={socialButtonStyles.facebook} iconLeft full activeOpacity={0.8}>
          <AntDesign name="facebook-square" size={24} color={'#fff'} />
          <Text>Facebook</Text>
        </Button>
        <Button style={socialButtonStyles.twitter} iconLeft full activeOpacity={0.8}>
          <AntDesign name="twitter" size={24} color={'#fff'} />
          <Text>Twitter</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
