import React from 'react';

import {Text, View, Image} from 'react-native';

const PostImage = ({post}) => {
  return (
    <View style={{width: '100%', height: 350}}>
      <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}}/>
    </View>
  );
};

export default PostImage;
