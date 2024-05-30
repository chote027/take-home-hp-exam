export type QuestionListType = {
  id: string;
  question: string;
  choices: string[];
  select: number;
};

export type ChoiceSelectedType = {
  index: string;
  selectedChoice: number;
};
