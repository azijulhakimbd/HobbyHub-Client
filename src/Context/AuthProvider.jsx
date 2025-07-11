import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // User Register
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
 

  // Google Login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // User Logout
  const userLogout = () => {
    return signOut(auth);
  };

  // Observer
  useEffect(() => {
    const UnSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      UnSubscribe();
    };
  }, []);

  const userInfo = {
    loading,
    setLoading,
    user,
    setUser,
    userLogin,
    userRegister,
    googleLogin,
    userLogout,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
