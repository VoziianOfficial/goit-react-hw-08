import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { user_info, userDiv, main_div, btn } from "./userMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={main_div}>
      <div className={userDiv}>
        <b className={user_info}>{user.email}</b>
      </div>
      <button className={btn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
