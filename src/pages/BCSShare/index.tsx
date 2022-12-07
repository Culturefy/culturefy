import React, { useState, useEffect } from "react";
import BSCForm from "../../components/BCSForm/index";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchCategoriesByUserId } from "src/store/apps/categories";
import { positionGoalsFetchAction, brandAuditFetchAction, possesCardsFetchAction } from "src/store/apps/global";
import { AppDispatch } from "src/store";
import { useSearchParams } from "react-router-dom";

import Styles from "./styles.module.scss";
import global from "src/global.module.scss";

import { Col, Row } from "react-bootstrap";
import Heading from "src/components/common/Heading";

import PossesCard from "src/components/common/PossesCard";

const BCSShare = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { public: categories } = useSelector((state: any) => state.category);
  const { position_goals, brand_audits, posses_cards } = useSelector((state: any) => state.global);
  const store = useSelector((state: any) => state.category);

  const [slider, setSlider] = useState(false);
  const [param] = useSearchParams()


  const user = param.get("user")


  console.log("categories", categories);
  // console.log('position_goals',position_goals);

  let goals_array = [];

  categories[1]?.subCategories?.map((sub_category: any) => {
    return sub_category.questions.answers.answer?.map((selected_goals: any) => {
      position_goals.map((goals: any) => {
        if (goals._id === selected_goals) {
          goals_array.push(goals.title);
        }
      });
    });
  });

  let possesCards_array = [];

  categories[2]?.subCategories?.map((sub_category: any) => {
    return sub_category.questions.answers.answer?.map((selected_possess: any) => {
      posses_cards.map((goals: any) => {
        if (goals._id === selected_possess) {
          possesCards_array.push(goals);
        }
      });
    });
  });

  useEffect(() => {
    dispatch(fetchCategoriesByUserId({ dispatch, user }));
    dispatch(positionGoalsFetchAction(dispatch));
    dispatch(possesCardsFetchAction(dispatch));
  }, []);

  return (
    <div>
      <Col md={10}>
        <div className={Styles.leftBoxesMain}>
          {/* <div className={`${Styles.brandCultureModalBox} ${slider ? "d-none" : "d-block"}`}> */}
          <Heading label="Brand Culture Strategy" variant="heading5" />

          <div className={`${Styles.headingCirclPoint} ${Styles.filledCircle} ${Styles.secondary}`}>
            <Heading label={categories[0]?.title} variant="heading6" />
          </div>
          {categories[0]?.subCategories.map((sub_category: any) => {
            console.log(sub_category)
            if (sub_category.questions.type !== "BRAND_AUDIT" && sub_category.questions.answers.answer) {
              return (
                <div className={Styles.headingCirclPoint}>
                  <Heading label={sub_category.title} variant="heading7" />
                  <p>{sub_category.questions.answers.answer}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
          {/* </div> */}

          {/* <div className={`${Styles.brandCultureModalBox} ${slider ? "d-block" : "d-none"}`}> */}
          <Heading label="Brand Culture Strategy" variant="heading5" />

          <div className={Styles.headingCirclPoint}>
            <Heading label="Employer Brand Audit" variant="heading7" />
            <div className="d-flex gap-3 mt-2">
              <div>
                <h5 className="f8 graphik-semibold">Branding Opportunities</h5>
                <ul className="f8 c-gray">
                  <li>Mission</li>
                  <li>Values</li>
                </ul>
              </div>
              <div>
                <h5 className="f8 graphik-semibold">Branding Opportunities</h5>
                <ul className="f8 c-gray">
                  <li>Mission</li>
                  <li>Values</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${Styles.headingCirclPoint} ${Styles.filledCircle} ${Styles.yellow}`}>
            <Heading label="Position" variant="heading6" />
          </div>
          <div className={`${Styles.headingCirclPoint} ${Styles.yellow}`}>
            <Heading label="Goals" variant="heading7" />
            <ul className="f8 c-black mt-1">
              {goals_array.map((goals) => {
                return <li> {goals} </li>;
              })}
            </ul>
          </div>

          <div className={`${Styles.headingCirclPoint} ${Styles.filledCircle} ${Styles.primary}`}>
            <Heading label="Possess" variant="heading6" />
            <div className="mt-2">
              <Heading label="Campaigns, Activations, and Tactics" variant="heading7" />
              <div className={`${global.dflexCenter} ${"gap-1"}`}>
                {possesCards_array.map((posses_cards) => {
                  return (
                    <PossesCard
                      variant={posses_cards.color}
                      image={posses_cards.image}
                      title={posses_cards.title}
                      text={posses_cards.description}
                      points={posses_cards.points}
                      text_color={posses_cards.text_color}
                      inpId={posses_cards._id}
                      size="small"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* <p className={`${Styles.slidesCount} ${"f12 c-gray mt-3"}`}>
            <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleBack()} />
            <span> {count}/2 </span>
            <FontAwesomeIcon icon={faChevronRight} onClick={() => handleNext()} />
          </p> */}
        </div>
      </Col>
    </div>
  );
};

export default BCSShare;
