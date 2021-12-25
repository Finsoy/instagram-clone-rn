import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{uri: 'https://cdn-icons.flaticon.com/png/512/3161/premium/3161837.png?token=exp=1640444738~hmac=f4ba5536e9adaf3718cf01eb9e6c6ae0'}}
            style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'}} style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077047.png'}} style={styles.icon}/>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    // marginVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },

  icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    resizeMode: 'contain',
  }
});

export default Header;
