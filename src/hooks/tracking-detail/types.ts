import { ITrackingDetailResponse } from "../../services/requests/linketrack-detail/types";

export interface IDataTrackingState {
  data: ITrackingDetailResponse;
  isLoading: boolean;
  isError?: null | number;
}

export interface IGetTrackingDetailParams {
  codigo: string;
}
