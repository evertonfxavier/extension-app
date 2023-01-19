import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass, faBox } from "@fortawesome/free-solid-svg-icons";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  FormWrapper,
  HistoricContent,
  HistoricItem,
  HistoricWrapper,
  Wrapper,
} from "./styles";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  return (
    <Wrapper>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <FormWrapper>
          <Input name="code" placeholder="EX. LP561872045BR" />
          <Button type="submit" icon={faMagnifyingGlass} />
        </FormWrapper>
      </Form>
      <HistoricWrapper>
        <Heading type="h2">Histórico</Heading>
        <HistoricContent>
          <HistoricItem onClick={() => navigate(`2020/detail`)}>
            <FontAwesomeIcon icon={faBox} />
            <div>
              <div>
                <Text type="body1">Cód. </Text>
                <Text type="body1">LP561872045BR</Text>
              </div>
              <div>
                <Text type="body2">Última Consulta:</Text>
                <Text type="body2">20/04/2023</Text>
              </div>
            </div>
          </HistoricItem>
        </HistoricContent>
      </HistoricWrapper>
    </Wrapper>
  );
};

export default Home;
