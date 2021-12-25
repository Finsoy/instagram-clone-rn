import React from 'react';

import {Text, View, Image, StyleSheet} from 'react-native';

const PostHeader = ({post}) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerAvatar}>
        <Image source={{uri: post.profile_picture}} style={styles.storyImage}/>
        <Text style={styles.storyText}>{post.user}</Text>
      </View>

      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>...</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    margin: 5
  },
  headerAvatar: {
    flexDirection: 'row',
    alignItems: "center",
  },
  storyImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FF3250',
    resizeMode: 'cover',
    marginLeft: 5
  },
  storyText: {
    color: 'white',
    marginLeft: 10
  }
});

export default PostHeader;
