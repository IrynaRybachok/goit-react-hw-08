import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const RegistrationForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const usernameFildId = useId();
  const emailFildId = useId();
  const passwordFildId = useId();

  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
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
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div>
            <label htmlFor={usernameFildId}>Username</label>
            <Field type="text" name="username" id={usernameFildId} />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <label htmlFor={emailFildId}>Email</label>
            <Field type="email" name="email" id={emailFildId} />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label htmlFor={passwordFildId}>Password</label>
            <Field type="text" name="password" id={passwordFildId} />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
