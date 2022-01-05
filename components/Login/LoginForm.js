import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase, { auth, db } from '../../firebase';

import * as Yup from 'yup';
import { Formik } from 'formik';
import validator from 'email-validator';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required()
    .min(6, 'Password must be at least 6 characters long'),
});

const LoginForm = ({ navigation }) => {
  const onLogin = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        return onLogin(values.email, values.password);
      }}
      validationSchema={LoginSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor:
                  values.email.length < 1 || validator.validate(values.email)
                    ? '#ccc'
                    : 'red',
              },
            ]}
            placeholder="Enter your email"
            placeholderTextColor="gray"
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            autoFocus={true}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />

          {values.email.length < 1 ||
            (errors.email && <Text style={styles.error}>{errors.email}</Text>)}

          <TextInput
            style={[
              styles.input,
              {
                borderColor:
                  values.password.length < 1 || values.password.length >= 6
                    ? '#ccc'
                    : 'red',
              },
            ]}
            placeholder="Password"
            placeholderTextColor="gray"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType={'password'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />

          {values.password.length < 1 ||
            (errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            ))}

          <Pressable
            titleSize={20}
            style={styles.button(isValid)}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>

          <View style={styles.signUpContainer}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.push('SignUpScreen')}
            >
              <Text style={styles.signUpButtonText}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 30,
    marginTop: 10,
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    color: 'white',
    fontSize: 20,
  },

  button: (isValid) => ({
    marginTop: 15,
    backgroundColor: isValid ? '#6bb0f5' : '#9acaf7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 5,
  }),

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },

  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 5,
  },

  signUpButtonText: {
    fontWeight: 'bold',
    color: '#6bb0f5',
    fontSize: 16,
  },

  error: {
    fontSize: 15,
    color: 'red',
  },
});

export default LoginForm;
