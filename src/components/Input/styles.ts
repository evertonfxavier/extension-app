import styled from "styled-components";
import { Field } from "formik";
import { COLORS } from "../../themes/colors";

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  background-color: ${COLORS.WHITE};
  text-transform: uppercase;
`;
