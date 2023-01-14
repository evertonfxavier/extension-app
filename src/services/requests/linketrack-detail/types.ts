export interface ITrackingDetailRequest {
  user: string;
  token: string;
  codigo: string;
}

export interface ITrackingDetailTimeline {
  data: string;
  hora: string;
  local: string;
  status: string;
  subStatus: Array<string>;
}

export interface ITrackingDetailResponse {
  codigo: string;
  eventos: Array<ITrackingDetailTimeline>;
  host: string;
  quantidade: number;
  servico: string;
  time: number;
  ultimo: Date;
}
