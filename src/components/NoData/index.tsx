import Lottie from "react-lottie";

import NoDataBox from "../../assets/no-data-box.json";

const NoData = () => {
  return (
    <Lottie
      options={{
        animationData: NoDataBox,
        loop: false
      }}
      speed={.5}
    />
  );
};

export default NoData;
