import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "src/Layout/AuthLayout";
import UserLayout from "src/Layout/UserLayout";
import SettingLayout from "src/Layout/SettingLayout";
import WorkspaceLayout from "src/Layout/WorkspaceLayout";
import WorkspaceFileLayout from "src/Layout/WorkspaceFileLayout";
import RecruitingLayout from "src/Layout/RecruitingLayout";
import BusinessInfoMain from "src/components/BusinessInfoMain";
import { MdCampaign } from "react-icons/md";

const HomeAdmin = lazy(() => import("src/pages/HomeAdmin"));

const UserRole = lazy(() => import("src/components/UserRole"));
const Signup = lazy(() => import("src/pages/Signup"));
const Login = lazy(() => import("src/pages/Login"));

const NewCourseForm = lazy(() => import("src/pages/NewCourseForm"));
const Learning = lazy(() => import("src/pages/Learning"));
const CreateNewModule = lazy(() => import("src/pages/createNewModule"));
const CreateNewCourse = lazy(() => import("src/pages/createNewCourse"));
const CreateAiVideo = lazy(() => import("src/pages/CreateAiVideo"));

const CreateModuleLearning = lazy(
  () => import("src/pages/CreateModuleLearning")
);
const Notification = lazy(
  () => import("src/pages/AccountSetting/Notification")
);
const Users = lazy(() => import("src/pages/AccountSetting/users"));
const ProfileSetting = lazy(
  () => import("src/pages/AccountSetting/profileSetting")
);
const AddUser = lazy(() => import("src/components/common/AddUser"));
const AddMultipleUsers = lazy(
  () => import("src/components/common/AddMultipleUsers")
);
const DeleteUser = lazy(() => import("src/components/common/DeleteUser"));

const Community = lazy(() => import("src/pages/Community"));
const Surveys = lazy(() => import("src/pages/Surveys"));
const CreateSurvey = lazy(() => import("src/pages/CreateSurvey"));

const EditCourseForm = lazy(() => import("src/pages/EditCourseForm"));
const CreatedModulesAll = lazy(() => import("src/pages/CreatedModulesAll"));

const Tabs = lazy(() => import("src/components/common/Tabs"));

const Certifications = lazy(() => import("src/pages/Certifications"));

// const Learning = lazy(() => import('src/pages/Learning'))
// const CreateNewModule = lazy(() => import('src/pages/createNewModule'))
// const CreateNewCourse = lazy(() => import('src/pages/createNewCourse'))
// const CreateModuleLearning = lazy(() => import('src/pages/CreateModuleLearning'))

const CreateNew = lazy(() => import("src/pages/CreateNew"));
const NewEvent = lazy(() => import("src/pages/NewEvent"));

const BrandCultureStartegy = lazy(
  () => import("src/pages/BrandCultureStrategy")
);
const Rewards = lazy(() => import("src/pages/Rewards"));
const ResourceGroup = lazy(() => import("src/pages/resourceGroup"));

const SearchResults = lazy(() => import("src/pages/SearchResults"));

const Profile = lazy(() => import("src/pages/Profile"));

const UserProfile = lazy(() => import("src/pages/UserProfile"));

const ProfileTabs = lazy(() => import("src/pages/ProfileTabs"));

const BCSShare = lazy(() => import("src/pages/BCSShare"));

const Campaign = lazy(() => import("src/pages/Campaign"));
const CreateCampaign = lazy(() => import("src/pages/CreateCampaign"));
const WorkspaceList = lazy(() => import("src/pages/WorkspaceList"));
const CreateWorkspace = lazy(() => import("src/pages/CreateWorkspace"));
const WorkspaceFiles = lazy(() => import("src/pages/WorkspaceFiles"));
const WorkSpaceUpload = lazy(() => import("src/pages/WorkSpaceUpload"));
const WorkspaceFilepng = lazy(() => import("src/pages/WorkspaceFilepng"));
const WorkspaceFileMp3 = lazy(() => import("src/pages/WorkspaceFileMp3"));
const WorkspaceFileDoc = lazy(() => import("src/pages/WorkspaceFileDoc"));
const WorkspaceFileMp4 = lazy(() => import("src/pages/WorkspacefileMp4"));
const WorkspaceAgendas = lazy(() => import("src/pages/Agenda"));
const CreateNewTemplate = lazy(
  () => import("src/pages/Agenda/CreateNewTemplate")
);
const WorkspaceAgendasTemplates = lazy(
  () => import("src/pages/Agenda/WorkspaceAgendasTemplates")
);
const CreatePoll = lazy(() => import("src/pages/CreatePoll"));
const WorkspacePoll = lazy(() => import("src/pages/CreatePoll/WorkspacePoll"));
// ============Recruiting============
const Jobs = lazy(() => import("src/pages/Recruiting/Jobs"));
const AddJobs = lazy(() => import("src/pages/Recruiting/AddJobs"));
const EmployeeDetailsJobs = lazy(
  () => import("src/pages/Recruiting/JobEmployeeDetails")
);
const Application = lazy(
  () => import("src/pages/Recruiting/Application")
);
const AddApplication = lazy(
  () => import("src/pages/Recruiting/AddApplication")
);
const ApplicationDetails = lazy(
  () => import("src/pages/Recruiting/ApplicationDetails")
);
const Skill = lazy(
  () => import("src/pages/Recruiting/Skill")
);
const SkillAdd = lazy(
  () => import("src/pages/Recruiting/SkillAdd")
);
const TeslaCampaign = lazy(() => import('src/pages/TeslaCampaign'))
const Dashboard = lazy(() => import('src/pages/Recruiting/Dashboard'))
const Interviews = lazy(() => import('src/pages/Recruiting/Interviews'))
const SchedulerInterview = lazy(() => import('src/pages/Recruiting/SchedulerInterview'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <BrandCultureStartegy />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "home-admin",
        element: <HomeAdmin />,
      },
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
        path: "create-new-course/:id",
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
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile-tabs",
        element: <ProfileTabs />,
      },
      {
        path: "search-results",
        element: <SearchResults />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "campaign",
        element: <Campaign />,
      },
      {
        path: "create-campaigns",
        element: <CreateCampaign />,
      },
      {
        path: "workspace-list",
        element: <WorkspaceList />,
      },
    ],
  },
  {
    path: "/recruiting",
    element: <RecruitingLayout />,
    children: [
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "addjobs",
        element: <AddJobs />,
      },
      {
        path: "employeedetailsjobs",
        element: <EmployeeDetailsJobs />,
      },
      {
        path: "application",
        element: <Application />,
      },
      {
        path: "addapplication",
        element: <AddApplication />,
      },
      {
        path: "applicationDetails",
        element: <ApplicationDetails />,
      },
      {
        path: "skills",
        element: <Skill />,
      },
      {
        path: "skillsadd",
        element: <SkillAdd />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "interview",
        element: <Interviews />,
      },
      {
        path: "schedulerinterview",
        element: <SchedulerInterview />,
      },
    ],
  },

  {
    path: "/workspaces",
    element: <WorkspaceLayout />,
    children: [
      {
        path: "createworkspaces",
        element: <CreateWorkspace />,
      },
    ],
  },
  {
    path: "/workspacesfile",
    element: <WorkspaceFileLayout />,
    children: [
      {
        path: "workspacefiles",
        element: <WorkspaceFiles />,
      },
      {
        path: "workspacefilesUpload",
        element: <WorkSpaceUpload />,
      },
      {
        path: "workspacefilepng",
        element: <WorkspaceFilepng />,
      },
      {
        path: "workspacefilemp3",
        element: <WorkspaceFileMp3 />,
      },
      {
        path: "workspacefiledoc",
        element: <WorkspaceFileDoc />,
      },
      {
        path: "workspacefilemp4",
        element: <WorkspaceFileMp4 />,
      },
      {
        path: "workspaceagendas",
        element: <WorkspaceAgendas />,
      },
      {
        path: "createnewtemplate",
        element: <WorkspaceAgendasTemplates />,
      },
      {
        path: "create_newTemplate",
        element: <CreateNewTemplate />,
      },
      {
        path: "workspacepoll",
        element: <CreatePoll />,
      },
      {
        path: "createpoll",
        element: <WorkspacePoll />,
      },
      {
        path: "teslacampaign",
        element: <TeslaCampaign />,
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
  {
    path: "/shared/survey",
    element: <BCSShare />,
  },
]);
