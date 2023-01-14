/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TrackingDetail from "../../hooks/tracking-detail";
import { Wrapper } from "./styles";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getTrackingDetail } = TrackingDetail();

  useEffect(() => {
    if (!id) {
      return;
    }
    getTrackingDetail({
      codigo: id,
    });
  }, []);

  return (
    <Wrapper>
      <span>Detail {id}</span>
      <button onClick={() => navigate(-1)}>go back!!</button>
    </Wrapper>
  );
};

export default Detail;
