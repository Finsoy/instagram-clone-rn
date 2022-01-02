import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {SignedInStack, SignedOutStack} from "./navigation";
import {auth} from "./firebase";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null);
  }

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      userHandler(user)
    });
  }, []);

  return <>{currentUser ? <SignedInStack/> : <SignedOutStack/>}</>
};

const styles = StyleSheet.create({});

export default AuthNavigation;
