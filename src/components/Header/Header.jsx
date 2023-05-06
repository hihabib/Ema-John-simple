import classes from "./Header.module.css";
import logo from "../../images/Logo.svg";

export default function Header() {
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={classes.menu}>
          <ul>
            <li>Order</li>
            <li>Order Review</li>
            <li>Manage Inventory</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
