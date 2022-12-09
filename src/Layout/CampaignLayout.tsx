import React, { useState } from "react";
import Styles from "./styles.module.scss";
import AsideMenu from "./Aside";
import MainSidebar from "./MainSidebar";
import Header from "../components/Header";
import ProfileBox from "../components/ProfileBox";
import PageHeader from "../components/PageHeader";
import userImage from "../assets/images/admin-img.png";
import { Outlet } from "react-router-dom";

const CampaignLayout = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div>
            <div className={Styles.mainWrapperqa}>
                <aside className={Styles.sidebar}>
                    <MainSidebar />
                    <AsideMenu />
                </aside>
                <div className={Styles.campaign_maincontent}>
                    <div className={Styles.headerWrapper}>
                        <Header onClick={() => setShowDropDown(!showDropDown)} />
                        <PageHeader />
                        <ProfileBox
                            userImg={userImage}
                            show={showDropDown}
                            brandProgress="77"
                        />
                    </div>
                    <div className={Styles.campaignoutlet}>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignLayout
