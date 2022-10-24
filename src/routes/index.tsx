import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Router } from "react-router-dom";
// const AuthLayout = lazy(() => import('src/Layout/AuthLayout'))
// const GeneralLayout = lazy(() => import('src/Layout/AuthLayout'))
// import AuthLayout from 'src/Layout/AuthLayout'
// import GeneralLayout from 'src/Layout/UserLayout'

import AuthLayout from "../Layout/AuthLayout";
import UserLayout from "../Layout/UserLayout";
import SettingLayout from "../Layout/SettingLayout";

// import GeneralLayout from '../Layout/UserLayout';
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const UserRole = lazy(() => import("../components/UserRole"));
const BusinessInfoMain = lazy(() => import("../components/BusinessInfoMain"));
const BrandCultureStartegy = lazy(
  () => import("../pages/BrandCultureStrategy")
);

const Notification = lazy(() => import("../pages/AccountSetting/Notification"));
const Users = lazy(() => import("../pages/AccountSetting/users"));
const Community = lazy(() => import("../pages/Community"));
const Surveys = lazy(() => import("../pages/Surveys"));
const CreateSurvey = lazy(() => import("../pages/CreateSurvey"));

const Rewards = lazy(() => import("../pages/Rewards"));

const NewCourseForm = lazy(() => import("../pages/NewCourseForm"));
const Learning = lazy(() => import("../pages/Learning"));
const CreateNewModule = lazy(() => import("../pages/createNewModule"));
const CreateNewCourse = lazy(() => import("../pages/createNewCourse"));
const CreateAiVideo = lazy(() => import("../pages/CreateAiVideo"));

const CreateModuleLearning = lazy(
  () => import("../pages/CreateModuleLearning")
);

const EditCourseForm = lazy(() => import("../pages/EditCourseForm"));
const CreatedModules = lazy(() => import("../pages/CreatedModules"));
const CreatedModulesAll = lazy(() => import("../pages/CreatedModulesAll"));

const FilterBox = lazy(() => import("../components/common/FilterBox"));

const Tabs = lazy(() => import("../components/common/Tabs"));

const Certifications = lazy(() => import("../pages/Certifications"));

export const router = createBrowserRouter([
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "brand-culture-startegy",
        element: <BrandCultureStartegy />,
      },
      {
        path: "surveys",
        element: <Surveys />,
      },
      {
        path: "create-survey",
        element: <CreateSurvey />,
      },
      {
        path: "rewards",
        element: <Rewards />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "learning",
        element: <Learning />,
      },
      {
        path: "create-new-module",
        element: <CreateNewModule />,
      },
      {
        path: "create-new-course",
        element: <CreateNewCourse />,
      },
      {
        path: "create-module-learning",
        element: <CreateModuleLearning />,
      },
      {
        path: "new-course-form",
        element: <NewCourseForm />,
      },
      {
        path: "create-ai-video",
        element: <CreateAiVideo />,
      },
      {
        path: "edit-course-form",
        element: <EditCourseForm />,
      },
      {
        path: "created-modules",
        element: <CreatedModules />,
      },
      {
        path: "created-modules-all",
        element: <CreatedModulesAll />,
      },
      {
        path: "filter-box",
        element: <FilterBox />,
      },
      {
        path: "created-modules-tabs",
        element: <Tabs />,
      },
      {
        path: "certifications",
        element: <Certifications />,
      },
    ],
  },
  {
    path: "/setting",
    element: <SettingLayout />,
    children: [
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "message-requests",
        element: <Notification />,
      },
      {
        path: "my-campaigns",
        element: <Notification />,
      },
      {
        path: "my-workspaces",
        element: <Notification />,
      },
      {
        path: "profile-setting",
        element: <Notification />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "user-role",
        element: <UserRole />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "business-info",
        element: <BusinessInfoMain />,
      },
    ],
  },
]);
