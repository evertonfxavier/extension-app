import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import HistoricCard from "../../components/HistoricCard";
import { COLORS } from "../../themes/colors";

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

  const onSubmit = (values: Values) => {
    if (!values["code"]) {
      return;
    }
    navigate(`${values["code"]}/detail`);
  };

  useEffect(() => {
    localStorage.setItem("@teste", "@deu certo");
  }, []);

  return (
    <Wrapper>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <FormWrapper>
          <Input name="code" placeholder="EX. LP561872045BR" />
          <Button type="submit" icon={faMagnifyingGlass} />
        </FormWrapper>
      </Form>
      <HistoricWrapper>
        <Heading type="h2" color={COLORS.MONOCHROMATIC[100]} weight={600}>
          Histórico
        </Heading>
        <HistoricContent>
          <HistoricCard
            code="LB561874085HK"
            date="20/04/2023"
            onClick={() => navigate(`LB561874085HK/detail`)}
          />
          <HistoricCard
            code="NA848914857BR"
            date="20/04/2023"
            onClick={() => navigate(`NA848914857BR/detail`)}
          />
        </HistoricContent>
      </HistoricWrapper>
    </Wrapper>
  );
};

export default Home;
