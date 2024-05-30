import { SafeAreaView, FlatList, View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import LeaderList from "../components/LeaderBoard";
import ScoreContext, { ScoreDataType } from "../context/ScoreContext";
import users from "../uitls/usersList.json";
import Loader from "../components/Loader";

type LeaderBoardList = {
  id: string;
  username: string;
  name: string;
  score: number;
};

type UserDataType = {
  data?: ScoreDataType;
};

const updateLeaderBoard = (
  list: LeaderBoardList[],
  newData: LeaderBoardList
) => {
  const existingIndex = list.findIndex(
    (item) => item.username === newData.username
  );

  if (existingIndex !== -1) {
    const updatedList = [...list];
    updatedList[existingIndex] = { ...updatedList[existingIndex], ...newData };
    return updatedList;
  } else {
    return [...list, newData];
  }
};

const LeaderBoardScreen = () => {
  const { data }: UserDataType = useContext(ScoreContext);
  const [list, setList] = useState<LeaderBoardList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sortLeaderBoard = (leaderBoardList: LeaderBoardList[]) => {
    return leaderBoardList.sort((a, b) => b.score - a.score);
  };

  useEffect(() => {
    setIsLoading(true);
    if (data) {
      const newLeaderBoard = (prevList: LeaderBoardList[]) =>
        updateLeaderBoard(prevList, data);
      setList(sortLeaderBoard(newLeaderBoard(list)));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [data]);

  useEffect(() => {
    setList(sortLeaderBoard(users));
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView className="flex-1 items-center justify-center">
          <View className="justify-between w-80 mt-4 flex-row">
            <Text className="text-white py-4 pl-8">Name</Text>
            <Text className="text-white py-4 pr-6">Score</Text>
          </View>
          <FlatList
            data={list}
            renderItem={({ item, index }) => (
              <LeaderList index={index} name={item?.name} score={item?.score} />
            )}
            keyExtractor={(item) => item?.id}
          />
        </SafeAreaView>
      )}
    </Layout>
  );
};

export default LeaderBoardScreen;
