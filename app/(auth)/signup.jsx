import { View, Text, Image, TouchableOpacity } from "react-native";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { router } from "expo-router";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full flex justify-center items-center">
      <Image source={images.logo} resizeMode="contain" className="h-40 mb-5" />
      <Text className="font-heading text-light text-5xl">Doppiomate</Text>
      <FormField
        title="Username"
        placeholder="Username"
        otherStyles="mt-5"
        img={images.profile}
      />
      <FormField
        title="Password"
        placeholder="Password"
        otherStyles="mt-4"
        img={images.password}
      />
      <FormField
        title="Confirm Password"
        placeholder="Confirm Password"
        otherStyles="mt-4"
        img={images.password}
      />
      <Button
        title="SIGN UP"
        containerStyles="w-80 mt-7"
        textStyles="text-lg"
        handlePress={() => router.push("/home")}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
        }}
        className={"w-[60%] mt-3"}
      >
        <View
          style={{
            flex: 1,
            borderTopWidth: 1,
            borderTopColor: colors.dark,
            marginRight: 12,
          }}
        />
        <Text style={{ fontSize: 24, color: colors.light }}>OR</Text>
        <View
          style={{
            flex: 1,
            borderTopWidth: 1,
            borderTopColor: colors.dark,
            marginLeft: 12,
          }}
        />
      </View>
      <Text className={"text-light text-2xl"}>Sign up with</Text>
      <View className="flex flex-row mt-3">
        <TouchableOpacity className="p-2 rounded-full">
          <Image source={images.google} />
        </TouchableOpacity>
        <TouchableOpacity className="p-2 rounded-full">
          <Image source={images.facebook} />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row mt-3 mb-7">
        <Text className="text-lg">Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className={"text-light text-lg"}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
