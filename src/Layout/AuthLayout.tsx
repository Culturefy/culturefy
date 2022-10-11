import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const Login = lazy(() => import('src/pages/Login'))
// const Signup = lazy(() => import('src/pages/Signup'))
import Styles from './styles.module.scss'
import AsideMenu from "./Aside";
import MainSidebar from "./MainSidebar";

const AuthLayout = () => {
  return (
    <div>
      <div className={Styles.asideMain}>
        <MainSidebar />
        <AsideMenu />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
