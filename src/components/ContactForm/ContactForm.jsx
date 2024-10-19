import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./contactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain english letters"),
  phone: Yup.string()
    .min(4, "Too Short!")
    .max(15, "Too Long!")
    .required("Required")
    .matches(/^[+\d\s]+$/, "Phone must be a number"),
});

const nameId = nanoid();
const phoneId = nanoid();

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name.trim(),
      number: values.phone.trim(),
    };
    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, values }) => (
          <Form className={css.form}>
            <label className={css.label} htmlFor={nameId}>
              Name
              <Field
                id={nameId}
                className={css.input}
                type="text"
                name="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errors}
              />
            </label>

            <label className={css.label} htmlFor={phoneId}>
              Phone
              <Field
                id={phoneId}
                className={css.input}
                type="text"
                name="phone"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={css.errors}
              />
            </label>

            <button
              className={css.button}
              type="submit"
              disabled={!isValid || !values.name || !values.phone}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
