import classes from "./Login.module.css";
import googleLogo from "../../images/google.svg";
import InputGroup from "../../components/InputGroup/InputGroup";
import SignInWith from "../../components/SignInWith/SignInWith";
import Divider from "../../components/Divider/Divider";
const Login = () => {
  return (
    <div className={classes.login}>
      <div>
        <h1>Login</h1>
        <form>
          <InputGroup label="Email Address" name="email" type="email" />
          <br />
          <InputGroup label="Password" name="password" type="password" />
          <InputGroup label="Login" name="login" type="submit" />
        </form>
        <p>
          New to Ema-John? <a href="#">Create New Account</a>
        </p>
        <Divider>Or</Divider>
        <SignInWith icon={googleLogo} text="Continue With Google" />
      </div>
    </div>
  );
};

export default Login;
