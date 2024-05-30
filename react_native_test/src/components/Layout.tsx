import { View } from "react-native";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View className="flex-1 items-center justify-center bg-sky-900 px-4">
      {children}
    </View>
  );
};

export default Layout;
