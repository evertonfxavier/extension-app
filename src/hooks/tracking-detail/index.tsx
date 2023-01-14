import { useState } from "react";

import TrackingDetailRequest from "../../services/requests/linketrack-detail";
import { ITrackingDetailResponse } from "../../services/requests/linketrack-detail/types";
import { IDataTrackingState, IGetTrackingDetailParams } from "./types";

const user = process.env.REACT_APP_USER || "";
const token = process.env.REACT_APP_TOKEN || "";

const TrackingDetail = () => {
  const [dataTrackingState, setDataTrackingState] =
    useState<IDataTrackingState>({
      data: {} as ITrackingDetailResponse,
      isLoading: false,
      isError: null,
    });

  const getTrackingDetail = async ({ codigo }: IGetTrackingDetailParams) => {
    try {
      setDataTrackingState({
        ...dataTrackingState,
        isLoading: true,
      });
      const result = new TrackingDetailRequest();
      const response = await result.fetchTrackingDetailRequest({
        user,
        token,
        codigo,
      });
      setDataTrackingState({
        ...dataTrackingState,
        data: response,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
      setDataTrackingState({
        ...dataTrackingState,
        isLoading: false,
        isError: 401,
      });
    }
  };

  return { dataTrackingState, getTrackingDetail };
};

export default TrackingDetail;
