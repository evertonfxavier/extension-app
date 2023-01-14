import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { FormWrapper, Wrapper } from "./styles";

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
          <Button icon={faMagnifyingGlass} />
        </FormWrapper>
      </Form>
    </Wrapper>
  );
};

export default Home;
