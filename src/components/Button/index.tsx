import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";

import { ButtonStyled } from "./styles";

interface IButton {
  children?: ReactNode;
  icon?: IconProp;
}

const Button: FC<IButton> = ({ children, icon, ...props }) => {
  return (
    <ButtonStyled type="submit" {...props}>
      {children} {icon && <FontAwesomeIcon icon={icon} />}
    </ButtonStyled>
  );
};

export default Button;
