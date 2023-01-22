import { ButtonHTMLAttributes, FC } from "react";
import { faBox, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Text from "../../components/Text";
import { COLORS } from "../../themes/colors";

import { ContentWrapper, HistoricDateContent, Wrapper } from "./styles";

interface IHistoricCard extends ButtonHTMLAttributes<HTMLButtonElement> {
  code: string;
  date: string;
  onClick?: any;
}

const HistoricCard: FC<IHistoricCard> = ({ code, date, onClick, ...props }) => {
  return (
    <Wrapper onClick={onClick} {...props}>
      <FontAwesomeIcon icon={faBox} color={COLORS.MONOCHROMATIC[100]} />
      <ContentWrapper>
        <Text type="body4">{code}</Text>
        <Text type="body2" color={COLORS.MONOCHROMATIC[100]}>
          {code}
        </Text>
        <HistoricDateContent>
          <Text type="body4">Última Consulta:</Text>
          <Text type="body4">{date}</Text>
        </HistoricDateContent>
      </ContentWrapper>
      <FontAwesomeIcon
        icon={faArrowRight}
        color={COLORS.MONOCHROMATIC[100]}
        style={{
          width: 22,
          height: 22,
          paddingRight: 8,
        }}
      />
    </Wrapper>
  );
};

export default HistoricCard;
