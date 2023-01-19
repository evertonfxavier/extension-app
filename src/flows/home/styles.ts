import styled from "styled-components";
import { COLORS } from "../../themes/colors";

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const HistoricWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HistoricContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HistoricItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid ${COLORS.MONOCHROMATIC[50]};
  padding: 4px;
  cursor: pointer;
  background: ${COLORS.WHITE};

  :hover {
    filter: brightness(0.9);
  }
  :active {
    filter: brightness(0.8);
  }

  > svg {
    width: 40px;
    height: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;
