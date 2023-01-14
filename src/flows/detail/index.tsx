import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <span>Detail {id}</span>
      <button onClick={() => navigate(-1)}>go back!!</button>
    </div>
  );
};

export default Detail;
