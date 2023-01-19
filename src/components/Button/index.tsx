import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

import { ButtonStyled } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: IconProp;
}

const Button: FC<IButton> = ({ children, icon, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children} {icon && <FontAwesomeIcon icon={icon} />}
    </ButtonStyled>
  );
};

export default Button;
