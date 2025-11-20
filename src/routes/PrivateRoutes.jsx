import React from "react";
import useAuth from "../hook/useAuth";
import Loader from "../components/Loader";
import Login from "../pages/auth/Login";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, authLoading } = useAuth();
  if (authLoading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoutes;
