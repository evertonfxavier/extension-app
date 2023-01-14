import { FC, ReactNode } from "react";
import { Formik, Form as FormFormik } from "formik";

interface IForm {
  initialValues: object;
  children: ReactNode;
  onSubmit?: any;
}

const Form: FC<IForm> = ({ initialValues, children, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormFormik>{children}</FormFormik>
    </Formik>
  );
};

export default Form;
