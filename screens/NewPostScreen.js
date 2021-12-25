import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import AddNewPost from "../components/NewPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{background: 'black', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreen;
