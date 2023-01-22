import styled from "styled-components";

import { COLORS } from "../../themes/colors";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid ${COLORS.MONOCHROMATIC[50]};
  padding: 4px;
  cursor: pointer;
  background: ${COLORS.WHITE};
  align-items: center;
  transition: 0.2s ease;

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
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  > span {
    font-weight: 800;
  }

  > span:nth-child(2) {
    transition: 0.2s ease;
    :hover {
      color: ${COLORS.BLUE.MAIN};
    }
  }
`;

export const HistoricDateContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
