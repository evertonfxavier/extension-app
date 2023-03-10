import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { COLORS } from "../../themes/colors";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid ${COLORS.MONOCHROMATIC[80]};
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
    opacity: 0;
    visibility: hidden;
  }

  :hover {
    > svg {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const IconStepWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
`;

export const NameWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  > svg {
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease;
  }

  > span {
    font-weight: 800;
    transition: 0.2s ease;
  }

  :hover {
    > span {
      color: ${COLORS.BLUE.MAIN};
    }

    > svg {
      opacity: 1;
      visibility: visible;
      color: ${COLORS.BLUE.MAIN};
      :hover {
        color: ${COLORS.BLUE[75]};
      }
    }
  }
`;

export const ChangeNameInput = styled.input`
  width: 100%;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 2px;
  border: 1px solid ${COLORS.MONOCHROMATIC[80]};

  &:focus-visible {
    outline: 1px solid ${COLORS.BLUE.MAIN};
  }
`;

export const HistoricDateContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const CustomIcon = styled(FontAwesomeIcon)<{
  sizing?: number;
  paddingright?: number;
}>`
  width: ${(props) => `${props.sizing}px` ?? "14px"};
  height: ${(props) => `${props.sizing}px` ?? "14px"};
  padding-right: ${(props) => `${props.paddingright}px` ?? "none"};
  color: ${props => props.color};
`;
