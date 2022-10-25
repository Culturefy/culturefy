import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Businessinfo1 from "../Businessinfo1";
import Businessinfo2 from "../Businessinfo2";
import Businessinfo3 from "../Businessinfo3";

const Comp = () => {
  const [params] = useSearchParams();
  const tab = params.get("tab") || "";
  console.log(tab, "tab");
  switch (tab) {
    case "1":
      return <Businessinfo1 />;
    case "2":
      return <Businessinfo2 />;
    case "3":
      return <Businessinfo3 />;
    default:
      break;
  }
};

const BusinessInfoMain = () => {
  return (
    <>
      <Comp />
    </>
  );
};

export default BusinessInfoMain;
