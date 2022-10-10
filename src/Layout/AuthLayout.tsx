import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const Login = lazy(() => import('src/pages/Login'))
// const Signup = lazy(() => import('src/pages/Signup'))
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const AuthLayout = () => {
  return (
    <div>
      <div>Comon</div>
      <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
    </div>
  );
};

export default AuthLayout;
