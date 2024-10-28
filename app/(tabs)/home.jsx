import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default Home;
