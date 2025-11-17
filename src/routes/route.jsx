import { createBrowserRouter } from "react-router";
import MainLayoute from "../layoutes/MainLayoute";
import HomePage from "../pages/Home/Home";
import CoveragePage from "../pages/CoveragePage/CoveragePage";

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
]);

export default route;
