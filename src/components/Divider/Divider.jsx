import classes from "./Divider.module.css";
const Divider = ({ children }) => {
  return <div className={classes.divider}>{children}</div>;
};

export default Divider;
