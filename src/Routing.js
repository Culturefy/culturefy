import React from "react"
import { Router, Route, Routes } from "react-router-dom"
// Campaign
// import CreateWorkSpace from "./campaigns/Create"
import CreateCampaignNewVersion from "./campaigns/CreateCampaignNewVersion/CreateCampaignNewVersion"
import Campaign from "./campaigns/Index"
import Searchcampaign from "./campaigns/Searchcampaign/Searchcampaign"
import CampaignAd from "./campaigns/Searchcampaign/CampaignAd"
// Workspace
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
import WorkspacefileMp3 from "./WorkSpace/WorkSpaceFile/WorkspacefileMp3"
import WorkspaceAgendas from "./WorkSpace/Agendas/WorkspaceAgendas"
import WorkspaceAgendaTemplates from "./WorkSpace/Agendas/WorkspaceAgendasTemplates"
import WorkspaceAgendaView from "./WorkSpace/Agendas/WorkspaceAgendaView"

const Routing = () => {
    return (
        <Routes>
            {/* Campaign */}
            <Route path="/" element={<Campaign />} />
            <Route path="/campaigns" element={<Campaign />} />
            {/* <Route path="/create-campaigns" element={<Create />} /> */}
            <Route path="/create-campaigns" element={<CreateCampaignNewVersion />} />
            <Route path="/campaign/searchcapaign" element={<Searchcampaign />} />
            <Route path="/campaign/campaign-ad" element={<CampaignAd />} />
            {/* Work Space */}
            <Route path="/workspace-main" element={<Workspace />} />
            <Route path="/createworkspaces" element={<CreateWorkspaces />} />
            <Route path="/workspaces" element={<Worksplaceindex />} />
            <Route path="/workspacesdata" element={<WorkspacesData />} />
            <Route path="/workspacesupload" element={<WorkpacesUpload />} />
            <Route path="/workspacesfilepng" element={<WorkspacefilePng />} />
            <Route path="/workspacesfiledoc" element={<Workspacefiledoc />} />
            <Route path="/workspacesfilemp4" element={<WorkspacefileMp4 />} />
            <Route path="/workspacesfilemp3" element={<WorkspacefileMp3 />} />
            {/* Tesla Camaign */}
            <Route path="/teslacampaign" element={<Teslacampign />} />
            <Route path="/workspacepoll" element={<WorkspacePoll />} />
            <Route path="/createpoll" element={<Createpoll />} />
            <Route path="/workspace/gapanalysis" element={<Gapanalysis />} />
            <Route path="/workspace/meetingview" element={<Meetingview />} />
            <Route path="/workspace/meetingshareview" element={<Screenshareview />} />
            <Route path="/workspaceagendas" element={<WorkspaceAgendas />} />
            <Route path="/workspaceagendatemplates" element={<WorkspaceAgendaTemplates />} />
            <Route path="/workspaceagendasview" element={<WorkspaceAgendaView />} />
        </Routes>
    )
}
export default Routing