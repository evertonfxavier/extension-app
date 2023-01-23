import { FC } from "react";
import Lottie from "react-lottie";

import Heading from "../Heading";

import { Wrapper } from "./styles";

interface ILottieComponent {
  title?: string;
  data: object;
}

const LottieComponent: FC<ILottieComponent> = ({ title, data }) => {
  return (
    <Wrapper>
      <Lottie
        options={{
          animationData: data,
          loop: false,
        }}
        speed={0.5}
      />
      {title && <Heading type="h2">{title}</Heading>}
    </Wrapper>
  );
};

export default LottieComponent;
