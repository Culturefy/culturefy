import React from "react"
import { Router, Route, Routes } from "react-router-dom"
import Content from "./component/Content"
import AsideRight from "./Dashboard/AsideRight"
import Dashboard from "./Dashboard/Data"
import Create from "./campaigns/Create"
import Campaign from "./campaigns/Index"
import Workspace from './WorkSpace/Workspacesindex'
import CreateWorkspaces from "./WorkSpace/CreateWorkspaces"
import Worksplaceindex from "./WorkSpace/Workspacesindex"
import WorkspacesData from './WorkSpace/WorkspacesData'
import Teslacampign from "./WorkSpace/Teslacampign"
import WorkspacePoll from "./WorkSpace/Workspacepoll/WorkspacePoll"
import Createpoll from "./WorkSpace/Workspacepoll/Createpoll"
import Gapanalysis from "./WorkSpace/Gapanalysis/Gapanalysis"
import Meetingview from "./WorkSpace/Meeting view/Meetingview"
import Screenshareview from "./WorkSpace/Meeting view/Screenshareview"
import WorkpacesUpload from "./WorkSpace/WorkSpaceFile/WorkpacesUpload"
import WorkspacefilePng from "./WorkSpace/WorkSpaceFile/WorkspacefilePng"
import Workspacefiledoc from "./WorkSpace/WorkSpaceFile/Workspacefiledoc"
import WorkspacefileMp4 from "./WorkSpace/WorkSpaceFile/WorkspacefileMp4"
const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Campaign />} />
            <Route path="/campaigns" element={<Campaign />} />
            <Route path="/create-campaigns" element={<Create />} />
            <Route path="/workspace-main" element={<Workspace />} />
            <Route path="/createworkspaces" element={<CreateWorkspaces />} />
            <Route path="/workspaces" element={<Worksplaceindex />} />
            <Route path="/workspacesdata" element={<WorkspacesData />} />
            <Route path="/workspacesupload" element={<WorkpacesUpload />} />
            <Route path="/workspacesfilepng" element={<WorkspacefilePng />} />
            <Route path="/workspacesfiledoc" element={<Workspacefiledoc />} />
            <Route path="/workspacesfilemp4" element={<WorkspacefileMp4 />} />
            <Route path="/teslacampaign" element={<Teslacampign />} />
            <Route path="/workspacepoll" element={<WorkspacePoll />} />
            <Route path="/createpoll" element={<Createpoll />} />
            <Route path="/workspace/gapanalysis" element={<Gapanalysis />} />
            <Route path="/workspace/meetingview" element={<Meetingview />} />
            <Route path="/workspace/meetingshareview" element={<Screenshareview />} />
        </Routes>
    )
}
export default Routing