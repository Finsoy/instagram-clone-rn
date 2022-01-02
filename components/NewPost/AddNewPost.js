import React from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HeaderNewPost from "./HeaderNewPost";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderNewPost navigation={navigation}/>
      <FormikPostUploader navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      marginHorizontal: 10,
    },
  }
);

export default AddNewPost;
