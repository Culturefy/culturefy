import  { lazy } from 'react'
import { createBrowserRouter, Router } from "react-router-dom";
// const AuthLayout = lazy(() => import('src/Layout/AuthLayout'))
// const GeneralLayout = lazy(() => import('src/Layout/AuthLayout'))
// import AuthLayout from 'src/Layout/AuthLayout'
// import GeneralLayout from 'src/Layout/UserLayout'

import AuthLayout from '../Layout/AuthLayout'
import GeneralLayout from '../Layout/UserLayout'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/dashboard",
    element: <GeneralLayout />,
  },
]);
