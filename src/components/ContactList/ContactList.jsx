import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import css from "../ContactList/contactList.module.css";
import { Rings } from "react-loader-spinner";

export default function ContactList() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredUsers = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.userList}>
        {loading ? (
          <div className={css.loader}>
            <Rings
              visible={true}
              height="80"
              width="80"
              color="#6a1aff"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : error ? (
          <p>Something went wrong, check your Internet connection</p>
        ) : (
          filteredUsers.map((user) => {
            return <Contact userData={user} key={user.id} />;
          })
        )}
      </ul>
    </div>
  );
}
