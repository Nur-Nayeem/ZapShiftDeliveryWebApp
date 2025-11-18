import React, { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);

  const gogoleProvider = new GoogleAuthProvider();

  const signUpUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const signInWithGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, gogoleProvider);
  };
  const signOutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    signUpUser,
    SignInUser,
    updateUserProfile,
    signInWithGoogle,
    signOutUser,
    user,
    authLoading,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthContextProvider;
