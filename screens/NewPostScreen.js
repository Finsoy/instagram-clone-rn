import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AddNewPost from "../components/NewPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    display: 'flex',
  },
});

export default NewPostScreen;
