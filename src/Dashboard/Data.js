import React from "react";
// import "./Deshboard.css";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import { Route, Routes } from 'react-router-dom'
import Campaigns from '../campaigns/Index'
import Content from "../component/Content";
import Create from "../campaigns/Create"


const Data = () => {
  return (
   <div className="sidebar">
   <AsideLeft/>
   <AsideRight/>
   {/* <Create/> */}
   <Content/>
   </div>
  );
};

export default Data;