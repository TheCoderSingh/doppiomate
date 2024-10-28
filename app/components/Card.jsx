import { View, Text, Image, TouchableOpacity } from "react-native";
import { images } from "../../constants";

const Card = ({ cardStyles }) => {
  return (
    <View className={`bg-light ${cardStyles}`}>
      <View className="flex flex-row gap-4">
        <View>
          <Image source={images.drinks} />
        </View>
        <View className="flex-1">
          <View className="flex flex-row items-center justify-between mt-1">
            <Text className="text-lg font-bold">Café Misto</Text>
            <TouchableOpacity>
              <Image source={images.heart} className="mr-2 h-6 w-6" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center pt-2">
            <Image source={images.seat} />
            <Text className="text-sm pl-1">Moderate</Text>
          </View>
          <View className="flex flex-row">
            <View className="flex flex-row items-center pt-2">
              <Image source={images.noise} />
              <Text className="text-sm pl-1">Moderate</Text>
            </View>
            <View className="flex flex-row items-center pt-2 pl-3">
              <Image source={images.wifi} />
              <Text className="text-sm pl-1">Moderate</Text>
            </View>
          </View>
          <Text className="text-xs text-[#B9B9B9] mt-2">
            Lorem ipsum dolor sit amet. This cafe presents coffee.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
