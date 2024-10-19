import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { header, header_container } from "./appBar.module.css";
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={header}>
      <div className={`container ${header_container}`}>
        <Navigation />
        {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
      </div>
    </header>
  );
}
