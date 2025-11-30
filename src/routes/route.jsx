import { createBrowserRouter } from "react-router";
import MainLayoute from "../layoutes/MainLayoute";
import HomePage from "../pages/Home/Home";
import CoveragePage from "../pages/CoveragePage/CoveragePage";
import AuthLayout from "../layoutes/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddParcel from "../pages/addParcel/AddParcel";
import DashBoardLayout from "../layoutes/DashBoardLayout";
import MyParcels from "../pages/dashboard/my-Parcels/MyParcels";
import Payment from "../pages/dashboard/Payment/Payment";
import PaymentSuccess from "../pages/dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";
import BeARider from "../pages/beARider/BeARider";
import ApproveRiders from "../pages/dashboard/approveRiders/ApproveRiders";
import UsersManagement from "../pages/dashboard/user-management/UserManagement";
import AdminRoute from "./SecureRoutes/AdminRoute";
import PrivateRoutes from "./SecureRoutes/PrivateRoutes";

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
      {
        path: "send-parcel",
        element: (
          <PrivateRoutes>
            <AddParcel />
          </PrivateRoutes>
        ),
        loader: () => fetch("/ServiceCenter.json").then((res) => res.json()),
      },
      {
        path: "be-rider",
        element: (
          <PrivateRoutes>
            <BeARider />
          </PrivateRoutes>
        ),
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
  {
    path: "/Dashboard",
    element: (
      <PrivateRoutes>
        <DashBoardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "my-parcels",
        element: (
          <PrivateRoutes>
            <MyParcels />
          </PrivateRoutes>
        ),
      },
      {
        path: "approve-riders",
        element: (
          <AdminRoute>
            <ApproveRiders />
          </AdminRoute>
        ),
      },
      {
        path: "users-management",
        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoutes>
            <PaymentHistory />
          </PrivateRoutes>
        ),
      },
      {
        path: "payment-success",
        element: (
          <PrivateRoutes>
            <PaymentSuccess />
          </PrivateRoutes>
        ),
      },
      {
        path: "payment-cancelled",
        element: (
          <PrivateRoutes>
            <PaymentCancelled />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default route;
