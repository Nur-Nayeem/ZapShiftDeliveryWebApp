import React from "react";
import { Navigate } from "react-router";
import useAuth from "../../hook/useAuth";
import Loader from "../../components/Loading/Loader";

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
