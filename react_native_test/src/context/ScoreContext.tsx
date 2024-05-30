import React, { ReactNode, useState } from "react";

type ContextProps = {
  children: ReactNode;
};

export type ScoreDataType = {
    id: string,
    username: string,
    name: string,
    score: number,
}

const ScoreContext = React.createContext({});

export const ScoreContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [data, setData] = useState<ScoreDataType>();

  const updateData = (newData: ScoreDataType) => {
    setData(newData);
  };

  return (
    <ScoreContext.Provider value={{ data, updateData }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
