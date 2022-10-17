import { useState } from "react";
import Businessinfo1 from "../Businessinfo1";
import Businessinfo2 from "../Businessinfo2";
import Businessinfo3 from "../Businessinfo3";

import Styles from "./styles.module.scss";

const Comp = () => {
  const [step, setStep] = useState(1);
  const nextStepHandler = (prevState:number) => {
    setStep(prevState + 1);
  };
  const prevStepHandler = (prevState:number) => {
    setStep(prevState - 1);
  };
  switch (step) {
    case 1:
      return (
        <Businessinfo1 Next={() => nextStepHandler(step)} />
      );
    case 2:
      return (
        <Businessinfo2
          Next={() => nextStepHandler(step)}
          Prev={() => prevStepHandler(step)}
        />
      );
    case 3:
      return (
        <Businessinfo3
          Next={() => nextStepHandler(step)}
          Prev={() => prevStepHandler(step)}
        />
      );
    default:
      break;
  }
};

const BusinessInfoMain = () => {
  return (
    <>
      <div className={Styles.businessInfoMain}>
        <div className={Styles.formsBusiness}>
          <Comp />
        </div>
      </div>
    </>
  );
};

export default BusinessInfoMain;
