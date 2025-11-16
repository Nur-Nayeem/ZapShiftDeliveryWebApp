import { createBrowserRouter } from "react-router";
import MainLayoute from "../layoutes/MainLayoute";
import HomePage from "../pages/Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

export default route;
