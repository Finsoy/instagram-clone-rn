import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Pressable, TouchableOpacity, Alert} from 'react-native';
import firebase, {auth, db} from "../../firebase";

import * as Yup from 'yup';
import {Formik} from 'formik';
import validator from 'email-validator';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  username: Yup.string().required().min(2, 'Username must be at least 2 characters'),
  password: Yup.string().required().min(6, 'Password must be at least 6 characters long'),
})

const SignupForm = ({navigation}) => {

  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0].picture.large;
  }

  const onSignup = async (email, password, username) => {
    try {
      const authUser = await auth.createUserWithEmailAndPassword(email, password)
      console.log('Sign UP Successful', email, password)

      await db.collection('users')
        .doc(authUser.user.email)
        .set({
        owner_uid: authUser.user.uid,
        email: authUser.user.email,
        username: username,
        profile_picture: await getRandomProfilePicture()
      })

    } catch (error) {
      Alert.alert(error.message);
      // console.log(error.message)
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(values)
        return onSignup(values.email, values.password, values.username)
        // navigation.push('HomeScreen')
      }}
      validationSchema={SignupSchema}
      validateOnMount={true}
    >

      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <View style={styles.container}>
          <Text style={styles.text}>Login Form</Text>
          <TextInput style={[styles.input,
            {borderColor: values.email.length < 1 || validator.validate(values.email) ? '#ccc' : 'red'}]}
                     placeholder="Enter your email"
                     placeholderTextColor='gray'
                     keyboardType={'email-address'}
                     textContentType={'emailAddress'}
                     autoFocus={true}
                     onChangeText={handleChange('email')}
                     onBlur={handleBlur('email')}
                     value={values.email}
          />

          {values.email.length < 1 || errors.email && (
            <Text style={styles.error}>
              {errors.email}
            </Text>
          )}

          <TextInput style={[styles.input,
            {borderColor: values.username.length < 1 || values.username.length >= 2 ? '#ccc' : 'red'}]}
                     placeholder="Username"
                     placeholderTextColor='gray'
                     textContentType={'username'}
                     onChangeText={handleChange('username')}
                     onBlur={handleBlur('username')}
                     value={values.username}
          />

          {values.username.length < 1 || errors.username && (
            <Text style={styles.error}>
              {errors.username}
            </Text>
          )}

          <TextInput style={[styles.input,
            {borderColor: values.password.length < 1 || values.password.length >= 6 ? '#ccc' : 'red'}]}
                     placeholder="Password"
                     placeholderTextColor='gray'
                     autoCorrect={false}
                     secureTextEntry={true}
                     textContentType={'password'}
                     onChangeText={handleChange('password')}
                     onBlur={handleBlur('password')}
                     value={values.password}
          />

          {values.password.length < 1 || errors.password && (
            <Text style={styles.error}>
              {errors.password}
            </Text>
          )}


          <Pressable titleSize={20}
                     style={styles.button(isValid)}
                     onPress={handleSubmit}
                     disabled={!isValid}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>

          <View style={styles.signUpContainer}>
            <Text style={{color: 'white', fontSize: 16}}>Already have an account?</Text>
            <TouchableOpacity style={styles.signUpButton}
                              onPress={() => navigation.push('LoginScreen')}>
              <Text style={styles.signUpButtonText}> Log in</Text>
            </TouchableOpacity>
          </View>

        </View>)
      }
    </Formik>
  );
};

const styles = StyleSheet.create({
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

export default SignupForm;
