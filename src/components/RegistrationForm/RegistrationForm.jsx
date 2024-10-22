import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { isLoggedInSelector } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();
  const isLogin = useSelector(isLoggedInSelector);

  if (isLogin) {
    return <Navigate to="/" />;
  }

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(
        8,
        "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special "
      )
      .matches(
        RegExp("(.*[a-z].*)"),
        "password must contain at least 1 lower case letter"
      )
      .matches(
        RegExp("(.*[A-Z].*)"),
        "password must contain at least 1 upper case letter"
      )
      .matches(RegExp("(.*\\d.*)"), "password must contain at least 1 number")
      .matches(
        RegExp('[!@#$%^&*(),.?":{}|<>]'),
        "password must contain at least 1 special character"
      )
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="text" name="password" id={passwordFieldId} />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
