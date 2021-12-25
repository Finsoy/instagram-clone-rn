import React from 'react';

import {Text, View} from 'react-native';

const CommentsSection = ({post}) => {
  return (
    <View style={{marginTop: 5}}>
      {!!post.comments.length && (
        <Text style={{color: 'grey'}}>
          View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
          {' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
};

export default CommentsSection;
