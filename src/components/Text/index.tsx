import { FC, ReactNode } from "react";

import { Text1, Text2, Text3 } from "./styles";

export interface TextProps {
  type: "body1" | "body2" | "body3";
  color?: string;
  align?: string;
  children: ReactNode;
}

const Text: FC<TextProps> = ({ children, type, color, align, ...props }) => {
  const renderText = (type: string) => {
    const titleElement: any = {
      body1: (
        <Text1 color={color} align={align} {...props}>
          {children}
        </Text1>
      ),
      body2: (
        <Text2 color={color} align={align} {...props}>
          {children}
        </Text2>
      ),
      body3: (
        <Text3 color={color} align={align} {...props}>
          {children}
        </Text3>
      ),
    };
    return titleElement[type];
  };

  return <>{renderText(type)}</>;
};

export default Text;
