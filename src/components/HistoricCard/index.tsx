import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import {
  faBox,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Text from "../../components/Text";
import { COLORS } from "../../themes/colors";

import {
  ContentWrapper,
  HistoricDateContent,
  IconStepWrapper,
  NameWrapper,
  Wrapper,
} from "./styles";

interface IHistoricCard extends ButtonHTMLAttributes<HTMLButtonElement> {
  code: string;
  date: string;
  goTo?: MouseEventHandler<HTMLButtonElement>;
  updateName: () => void;
  removeFromHistoric: () => void;
}

const HistoricCard: FC<IHistoricCard> = ({
  code,
  date,
  goTo,
  updateName,
  removeFromHistoric,
  ...props
}) => {
  const handleUpdateName = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    updateName();
  };

  const handleRemoveFromHistoric = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    removeFromHistoric();
  };

  return (
    <Wrapper onClick={goTo} {...props}>
      <IconStepWrapper color={COLORS.BLUE.MAIN}>
        <FontAwesomeIcon
          icon={faBox}
          color={COLORS.WHITE}
          style={{
            width: 22,
            height: 22,
          }}
        />
      </IconStepWrapper>
      <ContentWrapper>
        <Text type="body4">{code}</Text>
        <NameWrapper>
          <Text type="body2">{code}</Text>
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{
              width: 14,
              height: 14,
            }}
            onClick={handleUpdateName}
          />
        </NameWrapper>
        <HistoricDateContent>
          <Text type="body4">Última Consulta:</Text>
          <Text type="body4">{date}</Text>
        </HistoricDateContent>
      </ContentWrapper>
      <FontAwesomeIcon
        icon={faTrash}
        color={COLORS.MONOCHROMATIC[150]}
        style={{
          width: 14,
          height: 14,
          paddingRight: 8,
        }}
        onClick={handleRemoveFromHistoric}
      />
    </Wrapper>
  );
};

export default HistoricCard;
