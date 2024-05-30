import { Text, View } from "react-native";
import React from "react";

type ItemProps = {
  index: number;
  name: string;
  score: number;
};

const LeaderList = ({ index, name, score }: ItemProps) => {
  return (
    <View className="justify-between w-80 my-1 bg-sky-700 rounded-md flex-row">
      <Text className="text-white text-center py-4 pl-8">
        {index + 1} {name}
      </Text>
      <Text className="text-white text-center py-4 pr-8">{score}</Text>
    </View>
  );
};

export default LeaderList;
