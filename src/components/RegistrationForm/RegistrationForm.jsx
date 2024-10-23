import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { isLoggedInSelector } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import s from "./RegistrationForm.module.css";

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
        <div className={s.wrapInput}>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name"
          />
          <ErrorMessage className={s.formError} name="name" component="span" />
        </div>
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
        <button className={s.btnRegister} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
