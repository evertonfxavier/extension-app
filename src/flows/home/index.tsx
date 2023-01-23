import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { COLORS } from "../../themes/colors";
import Heading from "../../components/Heading";
import HistoricCard from "../../components/HistoricCard";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";
import { ILocalStorage, PACKTRACKING_ENUM } from "../../constants/localstorage";
import LottieComponent from "../../components/Lottie";
import { NoDataBox } from "../../assets";

import {
  FormWrapper,
  HistoricContent,
  HistoricWrapper,
  Wrapper,
} from "./styles";

interface Values {
  code: string;
}

const initialValues = {
  code: "",
};

const Home = () => {
  const [localDataState, setLocalDataState] = useState<ILocalStorage[]>(
    getLocalStorage(PACKTRACKING_ENUM.KEY)
  );
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (values: Values) => {
      if (!values["code"]) {
        return;
      }
      navigate(`${values["code"]}/detail`);
    },
    [navigate]
  );

  const handleUpdateName = (code: string, name: string) => {
    const getStorageDataList = getLocalStorage(PACKTRACKING_ENUM.KEY);

    const checkSpecificDataStorage = getStorageDataList?.find(
      (item: ILocalStorage) => item.codigo === code
    );

    const updateData = checkSpecificDataStorage
      ? {
          ...checkSpecificDataStorage,
          name,
        }
      : null;

    const filterPrevDataList = getStorageDataList?.filter(
      (item: ILocalStorage) => item.codigo !== code
    );

    if (updateData === null) return;

    setLocalDataState([...filterPrevDataList, updateData]);
    setLocalStorage([...filterPrevDataList, updateData]);
  };

  const handleRemove = useCallback((code: string) => {
    const getStorageDataList = getLocalStorage(PACKTRACKING_ENUM.KEY);
    const filterPrevDataList = getStorageDataList?.filter(
      (item: ILocalStorage) => item.codigo !== code
    );
    setLocalDataState([...filterPrevDataList]);
    setLocalStorage([...filterPrevDataList]);
  }, []);

  return (
    <Wrapper>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <FormWrapper>
          <Input name="code" placeholder="LP561872045BR" maxLength={13} />
          <Button
            type="submit"
            icon={faMagnifyingGlass}
            iconColor={COLORS.WHITE}
            style={{
              background: COLORS.BLUE.MAIN,
            }}
          />
        </FormWrapper>
      </Form>
      <HistoricWrapper>
        <Heading type="h2" color={COLORS.MONOCHROMATIC[100]} weight={600}>
          Histórico
        </Heading>
        <HistoricContent>
          {localDataState?.length > 0 ? (
            localDataState.map((item: ILocalStorage) => (
              <HistoricCard
                key={`key-${item.codigo}`}
                code={item.codigo}
                name={item.name}
                date={item.date}
                goTo={() => navigate(`${item.codigo}/detail`)}
                updateName={(newName) => handleUpdateName(item.codigo, newName)}
                removeFromHistoric={() => handleRemove(item.codigo)}
              />
            ))
          ) : (
            <LottieComponent data={NoDataBox} title="Não há nada aqui." />
          )}
        </HistoricContent>
      </HistoricWrapper>
    </Wrapper>
  );
};

export default Home;
