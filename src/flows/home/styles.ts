import styled from "styled-components";

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
  flex-direction: column-reverse;
  gap: 8px;
`;

export const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;
