import React, { useState } from "react";
import Styles from "./styles.module.scss";
import global from "src/global.module.scss";
import Heading from "src/components/common/Heading";
import { BiCheckCircle } from "react-icons/bi";

function WorkspaceCard(props: any) {
  const [selectWorkspace, setSelectWorkspace] = useState(false);
  return (
      <div 
        className={`${Styles.workspaceCard} ${global.grayBox} ${selectWorkspace ? '' : 'bg-none'}`} 
        onClick={()=> setSelectWorkspace(!selectWorkspace)} >
        <div className={`${global.dflexCenter} ${Styles.workspaceCardHead}`}>
          <Heading label={props.title} variant="heading4" />
          <BiCheckCircle className={`${'f22'} ${selectWorkspace ? 'opacity-1' : 'opacity-0'}`} />
        </div>
        <ul className={`${Styles.userImgs} ${global.dflexCenter} ${"mt-2"}`}>
          <li className={`${global.roundImg} ${global.roundImg25}`}>
            <img src={props.users_img} alt="" />
          </li>
          <li className={`${global.roundImg} ${global.roundImg25}`}>
            <img src={props.users_img} alt="" />
          </li>
          <li className={`${global.roundImg} ${global.roundImg25}`}>
            <img src={props.users_img} alt="" />
          </li>
            {
              props.more_imgs_count ? 
              <li
                className={`${global.roundImg} ${global.roundImg25} ${global.roundCount}`}
              >
                
                <span
                  className={`${"f12"} ${
                    global.dflexCenter
                  } ${"justify-content-center w-100 h-100"}`}
                >
                  +{props.more_imgs_count}
                </span>
              </li> : ''
            }
        </ul>
      </div>
  );
}
export default WorkspaceCard;
