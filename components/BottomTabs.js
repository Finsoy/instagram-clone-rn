import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider} from "react-native-elements";

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}}
             style={[
               styles.icon(activeTab, icon.name),
               icon.name === "Profile" ? styles.profilePicture() : null,
               activeTab === "Profile" && icon.name === activeTab ? styles.profilePicture(activeTab) : null
             ]}/>
    </TouchableOpacity>
  )

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon}/>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    paddingTop: 10,
  },
  icon: (activeTab = '', iconName) => ({
    width: 30,
    height: 30,
    margin: 10,
    zIndex: 10,
    tintColor: activeTab !== iconName && iconName !== "Profile" ? 'white' : '',
  }),

  profilePicture: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff',
  }),
});

export default BottomTabs;
