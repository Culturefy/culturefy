import React from 'react'
import Styles from './styles.module.scss'
import Inputqa from '../../components/common/Inputqa';
import Button from '../../components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faVideo , faImage , faSmile , faFile , faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FaMoneyBillWave } from 'react-icons/fa';

function CreatePost(
  {
    variant = 'primary',
  }
) {
  return (
    <>
      <div className={`${Styles.userCreatePost} ${Styles[variant]}`}>
        <Inputqa placeholder='Who Would you like to recognize?' />
        <div className={Styles.createpostBtnsMain}>
          <div className={Styles.createpostBtns}>
            <Button
              label='Reward'
              variant='transparent'
              color='whiteColor'
              icon={<FaMoneyBillWave />}
              size='sizeAuto'
            />
            <Button
              label='Live Video'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faVideo} />}
              size='sizeAuto'
            />
            <Button
              label='Photo/Video'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faImage} />}
              size='sizeAuto'
            />
            <Button
              label='Kudos'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faSmile} />}
              size='sizeAuto'
            />
            <Button
              label='Gif'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faFile} />}
              size='sizeAuto'
            />
            <Button
              label='Event'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faCalendar} />}
              size='sizeAuto'
            />
          </div>
          <Button
            label='Post'
            variant='white'
            color='black'
            size='smallBtn'
          />
        </div>

      </div>
    </>
  )
}

export default CreatePost
