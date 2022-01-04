import React from 'react';

import {Text, View} from 'react-native';

const Likes = ({post}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4}}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{post.likes_by_users.length.toLocaleString('en')} likes</Text>
    </View>
  );
};

export default Likes;
