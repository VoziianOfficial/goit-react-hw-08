import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { Rings } from "react-loader-spinner";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const filteredUsers = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

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
