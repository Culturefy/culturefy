import { useState } from "react";
import BusinessInfo1 from "../BusinessInfo1";
import BusinessInfo2 from "../BusinessInfo2";
import BusinessInfo3 from "../BusinessInfo3";


import Styles from './styles.module.scss'

const Comp = () => {
   const [step, setStep] = useState(1);
   const nextStepHandler = (prevState) => {
      setStep(prevState + 1);
   };
   const prevStepHandler = (prevState) => {
      setStep(prevState - 1);
   };
   switch (step) {
      case 1:
         return <BusinessInfo1 Next={() => nextStepHandler(step)} />;
      case 2:
         return (
            <BusinessInfo2
               Next={() => nextStepHandler(step)}
               Prev={() => prevStepHandler(step)}
            />
         );
      case 3:
         return (
            <BusinessInfo3
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
            <Comp />
         </div>
      </>
   );
};

export default BusinessInfoMain;
