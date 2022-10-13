import React from "react"
import {Router,Route,Routes} from "react-router-dom"
import Content from "./component/Content"

import AsideRight from "./Dashboard/AsideRight"
import Dashboard from "./Dashboard/Data"
import Create from "./campaigns/Create"
import Campaign from "./campaigns/Index"

const Routing=()=>{
    return(
<Routes>
    <Route path="/" element={<Campaign/>}/>
    <Route path="/campaigns" element={<Campaign/>}/>
    <Route path="/create-campaigns" element={<Create/>}/>
</Routes>
    )
}
export default Routing