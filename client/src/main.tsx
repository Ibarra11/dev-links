import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import RootLayout from "./components/RootLayout";
import LinksEditorPage from "./pages/LinksEditorPage";
import ProfilePage from "./pages/ProfilePage";
import PreviewPage from "./pages/PreviewPage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <LoginForm /> },
      { path: "/auth/register", element: <RegisterForm /> },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/links", element: <LinksEditorPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/preview", element: <PreviewPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
