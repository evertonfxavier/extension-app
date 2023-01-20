import Lottie from "react-lottie";

import NotFound from "../../assets/not-found.json";

const Error = () => {
  return (
    <Lottie
      options={{
        animationData: NotFound,
        loop: true,
      }}
    />
  );
};

export default Error;
