import React from 'react';

import {Text, View,} from 'react-native';
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
import Likes from "../../UI/Likes";
import Caption from "./Caption";
import CommentsSection from "./CommentsSection";
import Comments from "./Comments";
import firebase, {auth, db} from "../../../firebase";

const Post = ({post}) => {

  const handleLike = () => {
    const currentLikeStatus = !post.likes_by_users.includes(
      auth.currentUser.email
    );

    db.collection('users')
      .doc(post.owner_email)
      .collection('posts')
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
          : firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
      })
      .then(() => {
      }).catch(err => {
    });
  }

  return (
    <View style={{marginBottom: 30, borderTopWidth: 1, borderColor: 'grey'}}>
      <PostHeader post={post}/>
      <PostImage post={post}/>
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter post={post} handleLike={handleLike}/>
        <Likes post={post}/>
        <Caption post={post}/>
        <CommentsSection post={post}/>
        <Comments post={post}/>
      </View>
    </View>
  );
};

export default Post;
