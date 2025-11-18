import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import route from "./routes/route";
import AuthContextProvider from "./contexts/AuthContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={route} />
    </AuthContextProvider>
  </StrictMode>
);
