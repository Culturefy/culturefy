import React from 'react'
import Modal from 'react-bootstrap/Modal';

import Styles from './styles.module.scss'

import { useSelector } from 'react-redux';
import BCSForm from 'src/components/BCSForm';

function BrnadCultureModal(props: any) {

  const { categories } = useSelector((state: any) => state.category);
  const { position_goals, posses_cards } = useSelector((state: any) => state.global);

  console.log('categories', categories);
  // console.log('position_goals',position_goals);

  let goals_array = [];

  categories[1]?.subCategories?.map((sub_category: any) => {
    return (
      sub_category.questions.answers.answer?.map((selected_goals: any) => {
        position_goals.map((goals: any) => {
          if (goals._id === selected_goals) {
            goals_array.push(goals.title)
          }

        })
      })
    )
  })


  let possesCards_array = [];

  categories[2]?.subCategories?.map((sub_category: any) => {
    return (
      sub_category.questions.answers.answer?.map((selected_possess: any) => {
        posses_cards.map((goals: any) => {
          if (goals._id === selected_possess) {
            possesCards_array.push(goals)
          }
        })
      })
    )
  })

  return (
    <div className='modal'>
      <div className={`${Styles.modalMain} 'brandculture-modal`}>
        <Modal
          {...props}
          size="lg"
          dialogClassName="modal-1000px"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          closeButton
        >
          <Modal.Header >

          </Modal.Header>
          <Modal.Body >
            <BCSForm categories={categories} possesCards_array={possesCards_array} goals_array={goals_array}/>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}
export default BrnadCultureModal