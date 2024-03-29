import { ButtonHTMLAttributes, FC, MouseEventHandler, useState } from "react";
import {
  faBox,
  faPenToSquare,
  faTrash,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import Text from "../../components/Text";
import { COLORS } from "../../themes/colors";

import {
  ChangeNameInput,
  ContentWrapper,
  CustomIcon,
  HistoricDateContent,
  IconStepWrapper,
  NameWrapper,
  Wrapper,
} from "./styles";

interface IHistoricCard extends ButtonHTMLAttributes<HTMLButtonElement> {
  code: string;
  name: string;
  date: string;
  goTo?: MouseEventHandler<HTMLButtonElement>;
  updateName: (name: string) => void;
  removeFromHistoric: () => void;
}

const HistoricCard: FC<IHistoricCard> = ({
  code,
  name,
  date,
  goTo,
  updateName,
  removeFromHistoric,
  ...props
}) => {
  const [selectTextState, setSelectTextState] = useState(false);
  const [inputTextState, setInputText] = useState("");

  const handleUpdateName = () => {
    updateName(inputTextState);
    setSelectTextState(!selectTextState);
  };

  const handleRemoveFromHistoric = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    removeFromHistoric();
  };

  return (
    <Wrapper onClick={goTo} {...props}>
      <IconStepWrapper color={COLORS.BLUE.MAIN}>
        <CustomIcon icon={faBox} color={COLORS.WHITE} sizing={22} />
      </IconStepWrapper>
      <ContentWrapper>
        <Text type="body4">{code}</Text>

        {selectTextState ? (
          <NameWrapper
            onClick={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.preventDefault()}
          >
            <ChangeNameInput
              type="text"
              onChange={(e) => setInputText(e.target.value)}
            />
            <CustomIcon
              icon={faCheck}
              style={{
                color: COLORS.GREEN.MAIN,
              }}
              onClick={handleUpdateName}
            />
            <CustomIcon
              icon={faXmark}
              style={{
                color: COLORS.RED.MAIN,
              }}
              onClick={() => setSelectTextState(!selectTextState)}
            />
          </NameWrapper>
        ) : (
          <NameWrapper onClick={(e) => e.stopPropagation()}>
            <Text type="body2">{name}</Text>
            <CustomIcon
              icon={faPenToSquare}
              onClick={() => setSelectTextState(!selectTextState)}
            />
          </NameWrapper>
        )}
        <HistoricDateContent>
          <Text type="body4">Última Consulta:</Text>
          <Text type="body4">{date}</Text>
        </HistoricDateContent>
      </ContentWrapper>
      <CustomIcon
        icon={faTrash}
        color={COLORS.RED[50]}
        paddingright={8}
        onClick={handleRemoveFromHistoric}
      />
    </Wrapper>
  );
};

export default HistoricCard;
