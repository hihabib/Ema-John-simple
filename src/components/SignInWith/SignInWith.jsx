import classes from "./SignInWith.module.css";
const SignInWith = ({ icon, text }) => {
  return (
    <button className={classes.signInWith}>
      <img src={icon} alt="Google Icon" />
      <span>{text}</span>
    </button>
  );
};

export default SignInWith;
