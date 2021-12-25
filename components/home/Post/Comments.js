import React from 'react';

import {Text, View} from 'react-native';

const Comments = ({post}) => {
  return (
    <View>
      {post.comments.map((comment) => (
        <View key={comment.id} style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{color: 'white'}}>
            <Text style={{fontWeight: 'bold'}}>{comment.user}</Text>{" "}
            <Text>{comment.comment}</Text>
          </Text>

        </View>
      )).slice(0, 2)}
    </View>
  );
};

export default Comments;
