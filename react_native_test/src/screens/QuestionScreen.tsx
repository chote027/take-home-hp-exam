import { FlatList, Pressable, Text, View } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../components/Layout";
import { QuestionListType, ChoiceSelectedType } from "../models/list";
import QuestionList from "../components/Question";
import questions from "../uitls/questionsList.json";
import { scoreCalculateHandler } from "../services/scoreService";
import ScoreContext from "../context/ScoreContext";
import Loader from "../components/Loader";

type QuestionType = QuestionListType & {
  id: string;
};

const QuestionScreen = () => {
  const { updateData }: any = useContext(ScoreContext);
  const [questionList, setQuestionList] = useState<QuestionType[]>();
  const [choiceSelected, setChoiceSelected] = useState<ChoiceSelectedType>();
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitScore = () => {
    if (questionList && !disableSubmit) {
      const score = scoreCalculateHandler(questionList);
      updateData({
        id: "99",
        username: "F",
        name: "User",
        score: score,
      });
    }
  };

  const shuffle = (array: QuestionType[]) => {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array.slice(0, 20);
  };

  useEffect(() => {
    setIsLoading(true);
    const shuffledQuestions = [...questions];
    const randomQuestion = shuffle(shuffledQuestions);
    if (randomQuestion) {
      setQuestionList(randomQuestion);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (questionList && choiceSelected?.index) {
      const questionIndex = questionList.findIndex(
        (item) => item.id === choiceSelected?.index
      );
      questionList[questionIndex] = {
        ...questionList[questionIndex],
        select: choiceSelected?.selectedChoice,
      };
      if (questionList.every((item) => item.select !== -1)) {
        setDisableSubmit(false);
      }
      setQuestionList(questionList);
    }
  }, [choiceSelected]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView className="flex-1 items-center justify-center">
          <FlatList
            data={questionList}
            renderItem={({ item, index }) => (
              <>
                <QuestionList
                  id={item.id}
                  index={index}
                  question={item.question}
                  choices={item.choices}
                  select={item.select}
                  setChoiceSelected={setChoiceSelected}
                />
                {index === Number(questionList?.length) - 1 && (
                  <View className="items-center justify-center mt-6 border-t-2 border-gray-400">
                    <Pressable
                      className={
                        disableSubmit
                          ? "w-48 my-4 font-bold py-2 px-4 rounded bg-gray-400 mt-8 disabled"
                          : "w-48 my-4 font-bold py-2 px-4 rounded bg-sky-600 active:bg-sky-500 mt-8"
                      }
                      onPress={handleSubmitScore}
                    >
                      <Text className="text-center text-white">Submit</Text>
                    </Pressable>
                  </View>
                )}
              </>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      )}
    </Layout>
  );
};

export default QuestionScreen;
