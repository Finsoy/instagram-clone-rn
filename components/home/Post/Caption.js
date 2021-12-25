import React from 'react';

import {Text, View} from 'react-native';

const Caption = ({post}) => {
  return (
    <View style={{marginTop: 5}}>
      <Text style={{color: 'white'}}>
        <Text style={{fontWeight: 'bold', margin: 5}}>{post.user}</Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};

export default Caption;
