import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Router } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import UserLayout from "../Layout/UserLayout";
import SettingLayout from "../Layout/SettingLayout";


const UserRole = lazy(() => import("../components/UserRole"));
const Signup = lazy(() => import("../pages/Signup"));
const Login = lazy(() => import("../pages/Login"));
const BusinessInfoMain = lazy(() => import("../components/BusinessInfoMain"));






const NewCourseForm = lazy(() => import("../pages/NewCourseForm"));
const Learning = lazy(() => import("../pages/Learning"));
const CreateNewModule = lazy(() => import("../pages/createNewModule"));
const CreateNewCourse = lazy(() => import("../pages/createNewCourse"));
const CreateAiVideo = lazy(() => import("../pages/CreateAiVideo"));

const CreateModuleLearning = lazy(
  () => import("../pages/CreateModuleLearning")
);
const Notification = lazy(() => import("../pages/AccountSetting/Notification"));
const Users = lazy(() => import("../pages/AccountSetting/users"));
const ProfileSetting = lazy(
  () => import("../pages/AccountSetting/ProfileSetting")
);
const AddUser = lazy(() => import("../components/common/AddUser"));
const AddMultipleUsers = lazy(
  () => import("../components/common/AddMultipleUsers")
);
const DeleteUser = lazy(() => import("../components/common/DeleteUser"));

const Community = lazy(() => import("../pages/Community"));
const Surveys = lazy(() => import("../pages/Surveys"));
const CreateSurvey = lazy(() => import("../pages/CreateSurvey"));

const EditCourseForm = lazy(() => import("../pages/EditCourseForm"));
const CreatedModulesAll = lazy(() => import("../pages/CreatedModulesAll"));


const Tabs = lazy(() => import("../components/common/Tabs"));

const Certifications = lazy(() => import("../pages/Certifications"));

// const Learning = lazy(() => import('../pages/Learning'))
// const CreateNewModule = lazy(() => import('../pages/createNewModule'))
// const CreateNewCourse = lazy(() => import('../pages/createNewCourse'))
// const CreateModuleLearning = lazy(() => import('../pages/CreateModuleLearning'))

const CreateNew = lazy(() => import("../pages/CreateNew"));
const NewEvent = lazy(() => import("../pages/NewEvent"));

const BrandCultureStartegy = lazy(() => import("../pages/BrandCultureStrategy"));
const Rewards = lazy(() => import("../pages/Rewards"));
const ResourceGroup = lazy(() => import("../pages/resourceGroup"));




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
        path: "created-modules-all",
        element: <CreatedModulesAll />,
      },
      {
        path: "created-modules-tabs",
        element: <Tabs />,
      },
      {
        path: "certifications",
        element: <Certifications />,
      },
      {
        path: "create-module-learning",
        element: <CreateModuleLearning />,
      },
      {
        path: "create-new",
        element: <CreateNew />,
      },
      {
        path: "new-event",
        element: <NewEvent />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "resource-group",
        element: <ResourceGroup />,
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
        element: <ProfileSetting />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "add-multiple-users",
        element: <AddMultipleUsers />,
      },
      {
        path: "delete-user",
        element: <DeleteUser />,
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
