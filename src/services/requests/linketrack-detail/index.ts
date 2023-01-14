import linketrack from "../../clients/linketrack";
import { ITrackingDetailRequest, ITrackingDetailResponse } from "./types";

export default class TrackingDetailRequest {
  private readonly endpoints = {
    tracking: () => "track/json",
  };

  public async fetchTrackingDetailRequest({
    user,
    token,
    codigo,
  }: ITrackingDetailRequest): Promise<ITrackingDetailResponse> {
    const { data } = await linketrack.get(this.endpoints.tracking(), {
      params: {
        user,
        token,
        codigo,
      },
    });
    return data;
  }
}
