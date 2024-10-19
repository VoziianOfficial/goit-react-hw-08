import { Link } from "react-router-dom";
import { link, linkContainer } from "./authMenu.module.css";
export default function AuthNav() {
  return (
    <div className={linkContainer}>
      <Link className={link} to="/register">
        Register
      </Link>
      <Link className={link} to="/login">
        Login
      </Link>
    </div>
  );
}
