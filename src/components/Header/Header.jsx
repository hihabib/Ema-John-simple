import classes from "./Header.module.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/order-review">Order Review</Link>
            </li>
            <li>
              <Link to="/manage-inventory">Manage Inventory</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
