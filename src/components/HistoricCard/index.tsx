import React, { FC } from "react";
import { faBox, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Text from "../../components/Text";
import { COLORS } from "../../themes/colors";

import { HistoricDateContent, Wrapper } from "./styles";

interface IHistoricCard {
  code: string;
  date: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const HistoricCard: FC<IHistoricCard> = ({ code, date, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <FontAwesomeIcon icon={faBox} color={COLORS.MONOCHROMATIC[100]} />
      <div>
        <Text type="body1" color={COLORS.MONOCHROMATIC[100]}>
          {code}
        </Text>
        <HistoricDateContent>
          <Text type="body2">Última Consulta:</Text>
          <Text type="body2">{date}</Text>
        </HistoricDateContent>
      </div>
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
