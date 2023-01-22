import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

import { ButtonStyled } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: IconProp;
  iconColor?: string;
}

const Button: FC<IButton> = ({ children, icon, iconColor, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children} {icon && <FontAwesomeIcon icon={icon} color={iconColor} />}
    </ButtonStyled>
  );
};

export default Button;
