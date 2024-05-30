import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScoreContextProvider } from "./src/context/ScoreContext";
import LeaderBoardScreen from "./src/screens/LeaderBoardScreen";
import QuestionScreen from "./src/screens/QuestionScreen";
import { Image, View, Text } from "react-native";
const Tab = createBottomTabNavigator();

// const TabIcon = ({icon, color, name, focused}) => {
//   return (
//     <View>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         tintColor={color}
//       />
//       <Text>
//         {name}
//       </Text>
//     </View>
//   )
// }

export default function App() {
  return (
    <ScoreContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Question"
            component={QuestionScreen}
            options={{ title: "Questions" }}
          />
          <Tab.Screen
            name="LeaderBoard"
            component={LeaderBoardScreen}
            options={{ title: "Leader Board" }}
            // options={{ title: "Leader Board", tabBarIcon: ({color, focused}) => (icons.leaderBoard)}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ScoreContextProvider>
  );
}
