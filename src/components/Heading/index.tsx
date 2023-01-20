import { FC, ReactNode } from "react";

import { Heading1, Heading2, Heading3, Heading4, Heading5 } from "./styles";

export interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  color?: string;
  align?: string;
  weight?: number;
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({
  children,
  type,
  color,
  align,
  weight,
  ...props
}) => {
  const renderHeading = (type: string) => {
    const titleElement: any = {
      h1: (
        <Heading1
          as="h1"
          color={color}
          align={align}
          weight={weight}
          {...props}
        >
          {children}
        </Heading1>
      ),
      h2: (
        <Heading2
          as="h2"
          color={color}
          align={align}
          weight={weight}
          {...props}
        >
          {children}
        </Heading2>
      ),
      h3: (
        <Heading3
          as="h3"
          color={color}
          align={align}
          weight={weight}
          {...props}
        >
          {children}
        </Heading3>
      ),
      h4: (
        <Heading4
          as="h4"
          color={color}
          align={align}
          weight={weight}
          {...props}
        >
          {children}
        </Heading4>
      ),
      h5: (
        <Heading5
          as="h5"
          color={color}
          align={align}
          weight={weight}
          {...props}
        >
          {children}
        </Heading5>
      ),
    };
    return titleElement[type];
  };

  return <>{renderHeading(type)}</>;
};

export default Heading;
