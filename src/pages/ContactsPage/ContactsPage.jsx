import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { contacts_main, second_side } from "./contactsPage.module.css";
export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <div className={`container ${contacts_main}`}>
        <ContactList />
        <div className={second_side}>
          <ContactForm />
          <SearchBox />
        </div>
      </div>
    </section>
  );
}
