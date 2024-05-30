import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { ChoiceSelectedType, QuestionListType } from "../models/list";

type QuestionListPropsType = QuestionListType & {
  id: string;
  index: number;
  setChoiceSelected: React.Dispatch<ChoiceSelectedType>;
};

const choicesIndex = ["A", "B", "C", "D"];

const QuestionList = (props: QuestionListPropsType) => {
  const [indexSelected, setIndexSelected] = useState(-1);

  const pressHandler = (selectedChoice: number) => {
    props.setChoiceSelected({
      index: props.id,
      selectedChoice: selectedChoice,
    });
    setIndexSelected(selectedChoice);
  };

  return (
    <View className="text-start justify-center">
      <Text className="text-white pl-6">
        {props.index + 1}). {props.question}
      </Text>
      <View className="items-center justify-center p-4">
        {props?.choices.map((item: string, index: number) => (
          <Pressable
            className={
              indexSelected === index
                ? "font-bold py-2 px-4 rounded bg-sky-200 w-48 m-1 active:bg-sky-100"
                : "font-bold py-2 px-4 rounded bg-white w-48 m-1 active:bg-sky-200"
            }
            key={index}
            onPress={() => pressHandler(index)}
          >
            <Text className="text-black">
              {choicesIndex[index]}). {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default QuestionList;
