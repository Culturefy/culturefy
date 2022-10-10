import React from "react";
import "./Deshboard.css";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import { Route, Routes } from 'react-router-dom'
import Campaigns from '../campaigns/Index'
import Content from "../component/Content";


const Data = () => {
  return (
   <div className="sidebar">
   <AsideLeft/>
   <AsideRight/>
   <Content/>
   </div>
  );
};

export default Data;
