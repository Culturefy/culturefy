import  { lazy } from 'react'
import { createBrowserRouter, Router } from "react-router-dom";
// const AuthLayout = lazy(() => import('src/Layout/AuthLayout'))
// const GeneralLayout = lazy(() => import('src/Layout/AuthLayout'))
// import AuthLayout from 'src/Layout/AuthLayout'
// import GeneralLayout from 'src/Layout/UserLayout'

import AuthLayout from '../Layout/AuthLayout'
import UserLayout from '../Layout/UserLayout';
import GeneralLayout from '../Layout/UserLayout'

const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))
const UserRole = lazy(() => import('../components/UserRole'))
const BusinessInfoMain = lazy(() => import('../components/BusinessInfoMain'))


export const    router = createBrowserRouter([
  {
    path: "/user",
    element: <UserLayout />,
    // children: [
    //   {
    //     path: 'login',
    //     element: <Login />
    //   },
    //   {
    //     path: 'signup',
    //     element: <Signup />
    //   }
    // ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: 'user-role',
        element: <UserRole />,
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'business-info',
        element: <BusinessInfoMain />
      }
    ]
  },
  
]);
