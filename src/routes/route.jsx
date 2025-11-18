import { createBrowserRouter } from "react-router";
import MainLayoute from "../layoutes/MainLayoute";
import HomePage from "../pages/Home/Home";
import CoveragePage from "../pages/CoveragePage/CoveragePage";
import AuthLayout from "../layoutes/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const route = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "coverage",
        Component: CoveragePage,
        loader: () => fetch("/ServiceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default route;
