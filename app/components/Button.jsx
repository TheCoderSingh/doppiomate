import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, handlePress, containerStyles, textStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-light rounded-2xl min-h-[62px] flex flex-row items-center justify-center ${containerStyles}`}
    >
      <Text className={`text-dark text-2xl ${textStyles} font-primary`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
