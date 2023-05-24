import classes from "./Header.module.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);
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
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
          {user && (
            <>
              <span> | {user.displayName}</span>
              <button
                onClick={logOut}
                style={{
                  border: "none",
                  background: "khaki",
                  borderRadius: "5px",
                  padding: "8px 10px",
                  marginLeft: 10,
                }}
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
