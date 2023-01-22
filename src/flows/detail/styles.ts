import styled from "styled-components";
import { COLORS } from "../../themes/colors";

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const HeadingWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
`;

export const GoBackButton = styled.button`
  border: none;
  background: none;
`;

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  height: 400px;
  overflow-y: auto;
`;

//
export const TimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  border: 1px solid ${COLORS.MONOCHROMATIC[80]};
  border-radius: 4px;
  padding: 6px;
  background-color: ${COLORS.WHITE};
  cursor: default;
  align-items: center;

  :hover {
    filter: brightness(0.98);
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

export const InfoStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UnDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
`;
