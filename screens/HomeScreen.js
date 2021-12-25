import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import Stories from "../components/home/Stories";
import Post from "../components/home/Post/Post";
import {POSTS} from "../data/posts"
import BottomTabs from "../components/BottomTabs";
import {bottomTabIcons} from '../data/bottomTabIcons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    display: 'flex',
  },
});

export default HomeScreen;
