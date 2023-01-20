import styled from "styled-components";
import { COLORS } from "../../themes/colors";

export const Wrapper = styled.div`
  padding: 16px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 6px;

  h2 {
    width: 250px;
    text-align: center;
  }
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

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid ${COLORS.MONOCHROMATIC[100]};
  border-radius: 4px;
  padding: 6px;
`;

export const UnDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
`;
