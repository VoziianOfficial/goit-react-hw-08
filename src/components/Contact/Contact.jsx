import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
<<<<<<< HEAD
import css from "./Contact.module.css";
=======
import css from './Contact.module.css';
>>>>>>> 19b1492d21afb4dee833b7aed6e8bdcae2339c39
import { deleteContact, changeContact } from "../../redux/contacts/operations";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain English letters"),
  phone: Yup.string()
    .min(4, "Too Short!")
    .max(15, "Too Long!")
    .required("Required")
    .matches(/^[+\d\s]+$/, "Phone must be a number"),
});

export default function Contact({ userData }) {
  const [openModal, setOpenModal] = useState(false);
  Modal.setAppElement("#root");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSubmit = (id, values) => {
    const changedContact = {
      id: id,
      name: values.name.trim(),
      number: values.phone.trim(),
    };
    dispatch(changeContact(changedContact));
    console.log(changedContact);
    handleClose();
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <li className={css.userData}>
      <ul className={css.userUl}>
        <li className={css.userDataLi}>
          <div>
            <FaUser size="16" />
          </div>
          <p>{userData.name}</p>
        </li>
        <li className={css.userDataLi}>
          <div>
            <BsFillTelephoneFill size="16" />
          </div>
          <p>{userData.number}</p>
        </li>
      </ul>
      <div className={css.buttons}>
        <Button onClick={handleOpen} variant="outlined" color="success">
          Change
        </Button>
        <Button
          onClick={() => handleDelete(userData.id)}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </div>
      <Modal
        className={css.modal}
        isOpen={openModal}
        onRequestClose={handleClose}
      >
        <Formik
          initialValues={{ name: userData.name, phone: userData.number }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(userData.id, values)}
        >
          {({ isValid }) => (
            <Form className={css.form}>
              <label>
                Name
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </label>
              <label>
                Number
                <Field name="phone" type="text" placeholder="Phone" />
                <ErrorMessage name="phone" component="div" />
              </label>
              <button disabled={!isValid} type="submit">
                Change
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </li>
  );
}
