import Lottie from "react-lottie";

import BoxFloating from "../../assets/box-floating.json";

const LoadingBox = () => {
  return (
    <Lottie
      options={{
        animationData: BoxFloating,
        loop: true,
      }}
      speed={.5}
    />
  );
};

export default LoadingBox;
