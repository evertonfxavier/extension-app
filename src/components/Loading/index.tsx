import Lottie from "react-lottie";

import BoxFloating from "../../assets/box-floating.json";

const LoadingBox = () => {
  return (
    <Lottie
      options={{
        animationData: BoxFloating,
        loop: true,
      }}
    />
  );
};

export default LoadingBox;
