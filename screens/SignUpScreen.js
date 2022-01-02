import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LoginForm from "../components/Login/LoginForm";
import navigation from "../navigation";
import SignupForm from "../components/Signup/SignUpForm";

const INSTAGRAM_LOGO = 'https://cdn-icons-png.flaticon.com/512/174/174855.png'

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO, width: 100, height: 100}}/>
      </View>

      <SignupForm navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    display: 'flex',
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  logoContainer: {
    tintColor: 'black',
    alignItems: 'center',
    marginTop: 50
  }
});

export default SignUpScreen;
