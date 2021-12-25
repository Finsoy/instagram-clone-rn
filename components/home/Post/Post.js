import React from 'react';

import {Text, View,} from 'react-native';
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
import Likes from "../../UI/Likes";
import Caption from "./Caption";
import CommentsSection from "./CommentsSection";
import Comments from "./Comments";

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30, borderTopWidth: 1, borderColor: 'grey'}}>
      <PostHeader post={post}/>
      <PostImage post={post}/>
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter/>
        <Likes post={post}/>
        <Caption post={post}/>
        <CommentsSection post={post}/>
        <Comments post={post}/>
      </View>
    </View>
  );
};

export default Post;
