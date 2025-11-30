import React from "react";
import Forbidden from "../../components/Forbidden/Forbidden";
import useAuth from "../../hook/useAuth";
import useRole from "../../hook/useRole";
import Loader from "../../components/Loading/Loader";

const AdminRoute = ({ children }) => {
  const { authLoading } = useAuth();
  const { role, roleLoading } = useRole();

  if (authLoading || roleLoading) {
    return <Loader />;
  }

  if (role !== "admin") {
    return <Forbidden />;
  }

  return children;
};

export default AdminRoute;
