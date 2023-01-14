import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: min-content;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background-color: #d7d7d7;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(0.8);
  }
`;
