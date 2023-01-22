import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Error from "../../components/Error";
import Button from "../../components/Button";
import { COLORS } from "../../themes/colors";
import Heading from "../../components/Heading";
import HistoricCard from "../../components/HistoricCard";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";
import { PACKTRACKING_ENUM } from "../../constants/localstorage";

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
  const [localDataState, setLocalDataState] = useState(() => {
    const localStorageData = getLocalStorage(PACKTRACKING_ENUM.KEY);
    // if (localStorageData.length === 0) {
    //   localStorage.removeItem(PACKTRACKING_ENUM.KEY);
    // }
    return localStorageData;
  });
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

  //LB561874085HK
  //NA848914857BR
  //OV270250195BR
  //NL289950203BR

  const handleUpdateName = (code: string, name: string) => {
    const getStorageDataList = getLocalStorage(PACKTRACKING_ENUM.KEY);

    const checkSpecificDataStorage = getStorageDataList?.find(
      (item: any) => item.codigo === code
    );

    const updateData = checkSpecificDataStorage
      ? {
          ...checkSpecificDataStorage,
          name,
        }
      : null;

    const filterPrevDataList = getStorageDataList?.filter(
      (item: any) => item.codigo !== code
    );

    if (updateData === null) return;

    setLocalDataState([...filterPrevDataList, updateData]);
    setLocalStorage([...filterPrevDataList, updateData]);
  };

  const handleRemove = useCallback((code: string) => {
    const getStorageDataList = getLocalStorage(PACKTRACKING_ENUM.KEY);
    const filterPrevDataList = getStorageDataList?.filter(
      (item: any) => item.codigo !== code
    );
    setLocalDataState([...filterPrevDataList]);
    setLocalStorage([...filterPrevDataList]);
  }, []);

  return (
    <Wrapper>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <FormWrapper>
          <Input name="code" placeholder="EX. LP561872045BR" maxLength={13} />
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
          {localDataState.length > 0 ? (
            localDataState.map((item: any) => (
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
            <Error />
          )}
        </HistoricContent>
      </HistoricWrapper>
    </Wrapper>
  );
};

export default Home;
