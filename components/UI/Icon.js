import {Image, TouchableOpacity} from "react-native";
import React from "react";

const Icon = ({imgStyle, imgUrl}) => {
  return (
    <TouchableOpacity>
      <Image
        style={imgStyle}
        source={{uri: imgUrl}}
      />
    </TouchableOpacity>
  )
}

export default Icon;