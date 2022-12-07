import React, { useState } from "react";
import Styles from "./styles.module.scss";
import AsideMenu from "./Aside";
import MainSidebar from "./MainSidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const WorkspaceLayout = () => {
    const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div>
    <div className={Styles.mainWrapperqa}>
      <aside className={Styles.sidebar}>
        <MainSidebar />
        <AsideMenu />
      </aside>
      <div className={Styles.mainContent}>
        <div className={Styles.workspacesWrapper}>
          <Header onClick={() => setShowDropDown(!showDropDown)} />
        </div>
        <div className={Styles.workspaceInner}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WorkspaceLayout
