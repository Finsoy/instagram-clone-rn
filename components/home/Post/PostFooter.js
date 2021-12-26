import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "../../UI/Icon";
import {postFooterIcon} from "../../../data/postFooterIcon";


const PostFooter = ({post}) => {
  return (
    <View style={styles.container}>

      <View style={styles.leftFooterIconsContainer}>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[0].imageUrl}/>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[1].imageUrl}/>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[2].imageUrl}/>
      </View>

      <View>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[3].imageUrl}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%'
  },
  footerIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
});

export default PostFooter;
