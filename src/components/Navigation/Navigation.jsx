import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { link, nav } from "./navBar.module.css";
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={nav}>
      <NavLink className={link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
