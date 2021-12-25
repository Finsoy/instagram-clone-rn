import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/home/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HOME SCREEN</Text>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    display: 'flex',
  },
  text: {
    color: 'white',
  },
});

export default HomeScreen;
