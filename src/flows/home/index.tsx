import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <span>Home</span>
      <button onClick={() => navigate("1/detail")}>go to detail 1</button>
    </div>
  );
};

export default Home;
