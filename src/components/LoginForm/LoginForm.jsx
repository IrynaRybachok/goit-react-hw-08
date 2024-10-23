import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { isLoggedInSelector } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const isLogin = useSelector(isLoggedInSelector);

  if (isLogin) {
    return <Navigate to="/" />;
  }

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(8, "password must be at least 8 characters long")
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
        RegExp('[!@#$%^&*(),.?":{}|/_<>]'),
        "password must contain at least 1 special character"
      )
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.wrapInput}>
          <Field
            className={s.input}
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email"
          />
          <ErrorMessage className={s.formError} name="email" component="span" />
        </div>
        <div className={s.wrapInput}>
          <Field
            className={s.input}
            type="text"
            name="password"
            id={passwordFieldId}
            placeholder="Password"
          />
          <ErrorMessage
            className={s.formError}
            name="password"
            component="span"
          />
        </div>
        <button className={s.btnLogin} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
