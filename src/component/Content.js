import React from "react";
import "./Content.css";
import "../App.css";
import AsideLeft from "../Dashboard/AsideLeft";
import AsideRight from "../Dashboard/AsideRight";



const Content = () => {
  return (
    <>
      <div className='d-flex main_container'>
        <AsideLeft />
        <AsideRight />
      </div>

    </>
  );
};


export default Content;
