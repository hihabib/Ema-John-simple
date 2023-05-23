import Divider from "../../components/Divider/Divider";
import InputGroup from "../../components/InputGroup/InputGroup";
import SignInWith from "../../components/SignInWith/SignInWith";
import classes from "./Register.module.css";
import googleLogo from "../../images/google.svg";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {
  const { signInWithGoogle, user, loading } = useContext(AuthContext);
  if (!loading && user) {
    return <Navigate to="/" />;
  }
  return (
    !loading &&
    !user && (
      <div className={classes.register}>
        <div>
          <h1>Register</h1>
          <form>
            <InputGroup
              label="Enter your full name"
              name="fullname"
              type="text"
            />
            <br />
            <InputGroup label="Email Address" name="email" type="email" />
            <br />
            <InputGroup
              label="Enter New Password"
              name="password"
              type="password"
            />
            <br />
            <InputGroup
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
            />
            <InputGroup label="Sign Up" name="submit" type="submit" />
            <br />
          </form>
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
          <Divider>Or</Divider>
          <SignInWith
            handler={signInWithGoogle}
            icon={googleLogo}
            text="Continue With Google"
          />
        </div>
      </div>
    )
  );
};

export default Register;
