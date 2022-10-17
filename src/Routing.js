import React from "react"
import {Router,Route,Routes} from "react-router-dom"
import Content from "./component/Content"

import AsideRight from "./Dashboard/AsideRight"
import Dashboard from "./Dashboard/Data"
import Create from "./campaigns/Create"
import Campaign from "./campaigns/Index"
import Workspace from "./campaigns/Workspace"
import CreateWorkspaces from "./campaigns/CreateWorkspaces"
import Worksplaceindex from "./campaigns/Workspacesindex"

const Routing=()=>{
    return(
<Routes>
    <Route path="/" element={<Campaign/>}/>
    <Route path="/campaigns" element={<Campaign/>}/>
    <Route path="/create-campaigns" element={<Create/>}/>
    <Route path="/workspace-main" element={<Workspace/>}/>
    <Route path="/createworkspaces" element={<CreateWorkspaces/>}/>
    <Route path="/workspaces" element={<Worksplaceindex/>}/>
</Routes>
    )
}
export default Routing