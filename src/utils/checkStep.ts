import { COLORS } from "./../themes/colors";
import {
  faBox,
  faLocationDot,
  faDollarSign,
  faTruck,
  faCheck,
  faExclamationCircle,
  faX,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export enum STEP_ENUM {
  POSTED = "Objeto postado",
  IN_ROUTE = "Objeto encaminhado",
  RECEIVED = "Objeto recebido pelos Correios do Brasil",
  FOWARDED_FOR_INSPECTION = "Encaminhado para fiscalização aduaneira",
  INSPECTION_FINISHED = "Fiscalização aduaneira finalizada",
  SEIZED_BY_THE_INSPECTION = "Objeto apreendido por órgão de fiscalização",
  IN_ROUTE_TO_DELIVERY = "Objeto saiu para entrega ao destinatário",
  DELIVERED = "Objeto entregue ao destinatário",
}

export const checkIconByStatus = (status: string) => {
  const icon: any = {
    [STEP_ENUM.POSTED]: faEnvelope,
    [STEP_ENUM.IN_ROUTE]: faTruck,
    [STEP_ENUM.RECEIVED]: faLocationDot,
    [STEP_ENUM.FOWARDED_FOR_INSPECTION]: faDollarSign,
    [STEP_ENUM.INSPECTION_FINISHED]: faDollarSign,
    [STEP_ENUM.SEIZED_BY_THE_INSPECTION]: faX,
    [STEP_ENUM.IN_ROUTE_TO_DELIVERY]: faExclamationCircle,
    [STEP_ENUM.DELIVERED]: faCheck,
  };

  return icon[status] || faBox;
};

export const bgColorByStatus = (status: string) => {
  const checkColor: any = {
    [STEP_ENUM.POSTED]: COLORS.BLUE.MAIN,
    [STEP_ENUM.IN_ROUTE]: COLORS.PURPLE.MAIN,
    [STEP_ENUM.RECEIVED]: COLORS.ORANGE.MAIN,
    [STEP_ENUM.FOWARDED_FOR_INSPECTION]: COLORS.MONOCHROMATIC[150],
    [STEP_ENUM.INSPECTION_FINISHED]: COLORS.MONOCHROMATIC[150],
    [STEP_ENUM.SEIZED_BY_THE_INSPECTION]: COLORS.MONOCHROMATIC[150],
    [STEP_ENUM.IN_ROUTE_TO_DELIVERY]: COLORS.YELLOW.MAIN,
    [STEP_ENUM.DELIVERED]: COLORS.GREEN.MAIN,
  };

  return checkColor[status] || "red";
};

export const fixDataString = (item: string) => {
  return item.replace("Pa�s", "País").replace("Distribui��o", "Distribuição");
};
