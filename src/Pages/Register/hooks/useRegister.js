import { useEffect, useState } from "react";
import { emptyFromObject } from "../../../../utilities/object";
import useAuth from "../../../hooks/useAuth";

const dataSchema = {
  fullname: "",
  password: "",
  confirmPassword: "",
  email: "",
};
const useRegister = () => {
  const { signInWithGoogle, user, loading, registerWithEmailAndPassword } =
    useAuth();
  const [registerData, setRegisterData] = useState(dataSchema);

  const [errors, setErrors] = useState(dataSchema);
  const handleInput = (event) => {
    const newData = {
      ...registerData,
      [event.target.name]: event.target.value,
    };
    setRegisterData(newData);
  };

  //regsiter with email and password
  const userRegistration = (event) => {
    event.preventDefault();
    if (
      !(
        errors.fullname &&
        errors.email &&
        errors.password &&
        errors.confirmPassword
      )
    ) {
      const {
        fullname: { value: displayName },
        email: { value: userEmail },
        password: { value: userPassword },
      } = event.target;
      registerWithEmailAndPassword(userEmail, userPassword, displayName);
    }
  };
  //password validation
  useEffect(() => {
    if (registerData.password !== registerData.confirmPassword) {
      const newError = {
        ...errors,
        password: "Password doesn't match",
        confirmPassword: "Password doesn't match",
      };
      setErrors(newError);
    } else {
      const newError = emptyFromObject(errors, "password", "confirmPassword");
      setErrors(newError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerData.password, registerData.confirmPassword]);

  // Email validation
  useEffect(() => {
    if (
      registerData.email !== "" &&
      !registerData.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
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
  }, [registerData.email]);
  return {
    handleInput,
    errors,
    registerData,
    signInWithGoogle,
    user,
    loading,
    userRegistration,
  };
};

export default useRegister;
