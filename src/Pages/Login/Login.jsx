import classes from "./Login.module.css";
import googleLogo from "../../images/google.svg";
import InputGroup from "../../components/InputGroup/InputGroup";
import SignInWith from "../../components/SignInWith/SignInWith";
import Divider from "../../components/Divider/Divider";
import { Navigate, useLocation } from "react-router-dom";
import useLogin from "./hooks/useLogin";
const Login = () => {
  const location = useLocation();
  const {
    errors,
    loginData,
    handleLoginData,
    userLoginWithEmailAndPassword,
    signInWithGoogle,
    user,
    loading,
  } = useLogin();

  if (!loading && user) {
    return <Navigate to={location.state?.pathname ?? "/"} />;
  }
  return (
    !loading &&
    !user && (
      <div className={classes.login}>
        <div>
          <h1>Login</h1>
          <form onSubmit={userLoginWithEmailAndPassword}>
            <InputGroup
              onChange={handleLoginData}
              label="Email Address"
              name="email"
              type="email"
              value={loginData.email}
            />
            <small
              style={{
                color: "red",
                marginbottom: 20,
                display: "inline-block",
              }}
            >
              {errors.email}
            </small>
            <br />
            <InputGroup
              onChange={handleLoginData}
              label="Password"
              name="password"
              type="password"
              value={loginData.password}
            />
            <small
              style={{
                color: "red",
                marginbottom: 20,
                display: "inline-block",
              }}
            >
              {errors.password}
            </small>
            <InputGroup label="Login" name="login" type="submit" />
          </form>
          <p>
            New to Ema-John? <a href="#">Create New Account</a>
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

export default Login;
