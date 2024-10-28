import { View, Text, Image, TextInput } from "react-native";
import { colors, images } from "../../constants";

const SearchBar = () => {
  return (
    <View className="py-5 bg-dark w-[80%] mx-auto mt-5 rounded-full">
      <View className="flex flex-row pl-5 items-center">
        <Image source={images.search} />
        <TextInput
          placeholder="Search coworking places"
          placeholderTextColor={colors.light}
          className="pl-2 w-full text-light"
        />
      </View>
    </View>
  );
};

export default SearchBar;
