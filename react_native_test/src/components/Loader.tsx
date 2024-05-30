import { ActivityIndicator, View } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View className="text-center justify-center">
      <ActivityIndicator size="large" color="white"/>
    </View>
  );
};

export default Loader;
