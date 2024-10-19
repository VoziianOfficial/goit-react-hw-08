import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "./homePage.module.css";
export default function HomePage() {
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <section>
      <div className="container">
        {isLogged ? (
          <div className={css.logged}>
            <h1>
              Welcome <b>{user.name}</b>
            </h1>
          </div>
        ) : (
          <div className={css.notLogged}>
            <h1>Welcome to this Site, Login to Use it</h1>
          </div>
        )}
      </div>
    </section>
  );
}
