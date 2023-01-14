import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <span>Detail {id}</span>
    </div>
  );
};

export default Detail;
