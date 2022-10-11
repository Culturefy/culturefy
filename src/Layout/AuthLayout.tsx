import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const Login = lazy(() => import('src/pages/Login'))
// const Signup = lazy(() => import('src/pages/Signup'))
import AsideMenu from "./Aside";
import MainSidebar from "./MainSidebar";


const AuthLayout = () => {


  return (
    <div>
      <AsideMenu />
      <MainSidebar />
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
