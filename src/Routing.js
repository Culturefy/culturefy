import React from "react"
import {Router,Route,Routes} from "react-router-dom"
import Content from "./component/Content"

import AsideRight from "./Dashboard/AsideRight"
import Dashboard from "./Dashboard/Data"
import Create from "./campaigns/Create"
import Campaign from "./campaigns/Index"
import Workspace from "./campaigns/Workspace"

const Routing=()=>{
    return(
<Routes>
    <Route path="/" element={<Campaign/>}/>
    <Route path="/campaigns" element={<Campaign/>}/>
    <Route path="/create-campaigns" element={<Create/>}/>
    <Route path="/workspace-main" element={<Workspace/>}/>
</Routes>
    )
}
export default Routing