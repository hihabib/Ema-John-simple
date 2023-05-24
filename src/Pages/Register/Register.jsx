import Divider from "../../components/Divider/Divider";
import InputGroup from "../../components/InputGroup/InputGroup";
import SignInWith from "../../components/SignInWith/SignInWith";
import classes from "./Register.module.css";
import googleLogo from "../../images/google.svg";
import { Navigate } from "react-router-dom";
import useRegister from "./hooks/useRegister";

const Register = () => {
  const {
    handleInput,
    errors,
    registerData,
    signInWithGoogle,
    user,
    loading,
    userRegistration,
  } = useRegister();

  if (!loading && user) {
    return <Navigate to="/" />;
  }
  return (
    !loading &&
    !user && (
      <div className={classes.register}>
        <div>
          <h1>Register</h1>
          <form onSubmit={userRegistration}>
            <InputGroup
              label="Enter your full name"
              name="fullname"
              type="text"
              onChange={handleInput}
              value={registerData?.fullname}
            />
            <br />
            <InputGroup
              label="Email Address"
              name="email"
              type="email"
              onChange={handleInput}
              value={registerData?.email}
            />
            <small
              style={{
                color: "red",
                marginBottom: 20,
                display: "inline-block",
              }}
            >
              {errors.email}
            </small>
            <br />
            <InputGroup
              label="Enter New Password"
              name="password"
              type="password"
              onChange={handleInput}
              value={registerData?.password}
            />
            <small
              style={{
                color: "red",
                marginBottom: 20,
                display: "inline-block",
              }}
            >
              {errors.password}
            </small>
            <br />
            <InputGroup
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              onChange={handleInput}
              value={registerData?.confirmPassword}
            />
            <small
              style={{
                color: "red",
                marginBottom: 20,
                display: "inline-block",
              }}
            >
              {errors.confirmPassword}
            </small>
            <br />
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
