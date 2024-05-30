import { QuestionListType } from "../models/list";
import answerList from "../uitls/answerList.json";

export const scoreCalculateHandler = (questionList: QuestionListType[]) => {
  return answerList.reduce((score, item) => {
    const question = questionList.find((question) => question.id === item.id);
    if (question) {
      const choiceSelected = question.choices[question.select];
      if (choiceSelected === item.answer) {
        score++;
      }
    }
    return score;
  }, 0);
};
