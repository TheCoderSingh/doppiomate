import { View, TextInput, Image } from "react-native";
import { colors } from "../../constants";

const FormField = ({ title, placeholder, otherStyles, img }) => {
  return (
    <View
      className={`w-80 h-16 px-4 rounded-2xl flex flex-row items-center bg-light ${otherStyles}`}
    >
      <Image
        source={img}
        resizeMode="contain"
        tintColor={colors.dark}
        className={"w-6 h-6 mr-3"}
      />
      <TextInput
        placeholder={placeholder}
        className="text-dark"
        placeholderTextColor="#221A23"
      />
    </View>
  );
};

export default FormField;
