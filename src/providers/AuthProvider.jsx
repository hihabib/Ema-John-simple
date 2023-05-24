import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const logOut = () => signOut(auth);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const registerWithEmailAndPassword = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const { user } = userCredential;
        updateProfile(user, {
          displayName,
        }).then(() => {
          setUser({ ...user });
        });
      }
    );
  };

  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const data = {
    signInWithGoogle,
    user,
    logOut,
    loading,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
