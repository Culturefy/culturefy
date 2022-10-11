import React from "react"
import {Router,Route,Routes} from "react-router-dom"
import Content from "./component/Content"

import AsideRight from "./Dashboard/AsideRight"
import Dashboard from "./Dashboard/Data"
import Create from "./campaigns/Create"

const Routing=()=>{
    return(
<Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/campaigns" element={<Content/>}/>
    <Route path="/create-campaigns" element={<Create/>}/>
</Routes>
    )
}
export default Routing