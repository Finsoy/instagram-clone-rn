import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HeaderNewPost = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/860/860790.png'}}
               style={styles.leftArrow}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
    },

    leftArrow: {
      width: 30,
      height: 30,
      tintColor: 'white',
    },

    headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: 25,
    },
  }
);

export default HeaderNewPost;
