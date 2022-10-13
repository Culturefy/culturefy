import React from 'react';
import Button from '../common/Button';
import Heading from '../common/Heading';
import TextFieldQa from '../common/TextFieldQa';

import globalStyles from '../../global.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../common/IconButton';

const BusinessInfo1 = (props:any) => {

   return (
      <div>
         <div className={globalStyles.prevIconform}>
            <IconButton icon={ <FontAwesomeIcon icon={faArrowLeft} onClick={props.Prev} /> } />
         </div>
         <Heading label='Who should we work with to collect the following data elements:' variant='heading1' />
         <TextFieldQa label='A. Demographic information for all 200 "in scope" employees (includes role, tenure, start date, age, race/ethnicity, highest education, annual compensation, performance evaluations for prior 3 years, work location):' placeholder='Description Here..' />
         <TextFieldQa label='B. Historical employee engagement results:' placeholder='Description Here..' />
         <TextFieldQa label='C. Org Charts:' placeholder='Description Here..' />
         <TextFieldQa label='D. Employee handbook / HR policies:' placeholder='Description Here..' />
         <TextFieldQa label='E. Turnover data (prior 3 years):' placeholder='Description Here..' />
         <TextFieldQa label='F. Exit interview data (prior 3 years):' placeholder='Description Here..' />
         <div>
            <Button
               variant='filled'
               color='secondary'
               label='Next'
               size='medium'
               onClick={props.Next}
            />
            <Button
               variant='transparent'
               color='gray'
               label='Skip for now'
               size='medium'
            />
         </div>
      </div>
   )
}

export default BusinessInfo1