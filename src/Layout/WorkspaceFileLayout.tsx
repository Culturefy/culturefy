import React, { useState } from "react";
import './WorkspaceFilelayout.css'
import AsideMenu from "./Aside";
import MainSidebar from "./MainSidebar";
import Header from "../components/Header";
import WorkspaceHeader from "../components/WorkspaceHeader";
import { Outlet } from "react-router-dom";
import WorkSpaceSidebar from '../components/WorkspaceSidebar'
const WorkspaceFileLayout = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div className="mainWrapper">
            <div className="sidebar">
                <MainSidebar />
                <AsideMenu />
            </div>
            <div className="wcmainContent">
                <div className="wcmainheader">
                    <Header onClick={() => setShowDropDown(!showDropDown)} />
                </div>
                <div className="wcfileheader">
                    <WorkspaceHeader />
                </div>
                <div className="wcfileinner">
                    <Outlet />
                </div>
            </div>
            <div className="wctoolsidebar">
                <WorkSpaceSidebar />
            </div>

        </div>

    )
}

export default WorkspaceFileLayout;


