import { useEffect, useState } from "react";
import { emptyFromObject } from "../../../../utilities/object";
import useAuth from "../../../hooks/useAuth";

const loginSchema = {
  email: "",
  password: "",
};
const useLogin = () => {
  const { loginWithEmailAndPassword, signInWithGoogle, user, loading } =
    useAuth();
  const [loginData, setLoginData] = useState(loginSchema);
  const [errors, setErrors] = useState(loginSchema);
  // Email validation
  useEffect(() => {
    if (
      loginData.email !== "" &&
      !loginData.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      const newError = {
        ...errors,
        email: "Please enter a valid email",
      };
      setErrors(newError);
    } else {
      const newError = emptyFromObject(errors, "email");
      setErrors(newError);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData.email]);

  const handleLoginData = (event) => {
    const newData = {
      ...loginData,
      [event.target.name]: event.target.value,
    };
    setLoginData(newData);
  };

  const userLoginWithEmailAndPassword = (event) => {
    event.preventDefault();
    const {
      email: { value: userEmail },
      password: { value: userPassword },
    } = event.target;
    loginWithEmailAndPassword(userEmail, userPassword);
  };
  return {
    loginData,
    handleLoginData,
    errors,
    userLoginWithEmailAndPassword,
    signInWithGoogle,
    user,
    loading,
  };
};

export default useLogin;
