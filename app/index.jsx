import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { images } from "./../constants";
import Button from "./components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="h-full items-center justify-center bg-primary px-4">
      <Image source={images.logo} resizeMode="contain" />
      <Text className="text-light text-6xl text-center pt-2 px-3 font-primary">
        Discover, Work, and Thrive!
      </Text>
      <Text className="text-light text-center text-lg pt-2 px-5 font-primary leading-5">
        Discover the perfect cafe for remote work. Real-time updates on seating,
        Wi-Fi, and ambiance, plus networking events and exclusive perks.
      </Text>
      <Button title={"Get Started"} containerStyles="w-full mt-7" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
