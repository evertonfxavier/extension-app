import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Error from "../../components/Error";
import Button from "../../components/Button";
import { COLORS } from "../../themes/colors";
import Heading from "../../components/Heading";
import HistoricCard from "../../components/HistoricCard";
import { getLocalStorage } from "../../utils/localstorage";
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

  const getStorageData = getLocalStorage(PACKTRACKING_ENUM.KEY);

  //LB561874085HK
  //NA848914857BR
  //OV270250195BR
  //NL289950203BR

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
          {getStorageData ? (
            getStorageData.map((item: any) => (
              <HistoricCard
                key={`key-${item.codigo}`}
                code={item.codigo}
                date={item.date}
                onClick={() => navigate(`${item.codigo}/detail`)}
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
