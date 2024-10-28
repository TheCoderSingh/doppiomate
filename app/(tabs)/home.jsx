import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row justify-between m-3">
          <View className="flex flex-row items-center">
            <Image source={images.sun} className="w-18 h-18" />
            <View>
              <Text className="text-lg">Good morning,</Text>
              <Text className="text-primary text-lg">Belle</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={images.girl} />
          </TouchableOpacity>
        </View>
        <SearchBar />
        <Card cardStyles="w-[90%] mx-auto mt-6" />
        <Card cardStyles="w-[90%] mx-auto mt-6" />
        <Card cardStyles="w-[90%] mx-auto mt-6" />
        <Card cardStyles="w-[90%] mx-auto mt-6" />
        <Card cardStyles="w-[90%] mx-auto mt-6" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
