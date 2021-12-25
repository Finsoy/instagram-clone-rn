import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {USERS} from '../../data/users';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <TouchableOpacity key={`${index}${story.user}`}>
            <View style={styles.story}>
              <Image source={{uri: story.image}} style={styles.storyImage}/>
              <Text style={styles.storyText}>{
                story.user.length > 11 ? story.user.slice(0, 10) + '...'
                  : story.user
              }</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF3250',
    resizeMode: 'cover',
  },
  storyText: {
    marginTop: 5,
    color: 'white',
  }
});

export default Stories;
