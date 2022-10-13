import React from 'react';
import Button from '../common/Button';
import Heading from '../common/Heading';
import TextFieldQa from '../common/TextFieldQa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../common/IconButton';

const BusinessInfo1 = (props:any) => {

   return (
      <div className='signInpForms'>
         <IconButton icon={ <FontAwesomeIcon icon={faArrowLeft} onClick={props.Prev} /> } />
         <Heading label='Business Information:' variant='heading1' />
         <TextFieldQa label='Describe a brief history of your business:' placeholder='Description Here..' />
         <TextFieldQa label='What level of involvement will your HR team have in this engagement? Who is your HR point person?' placeholder='Description Here..' />
         <TextFieldQa label='Has your business ever completed a diversity and inclusion survey? If so, can someone provide the survey results?' placeholder='Description Here..' />
         <TextFieldQa label='When would your company like to conduct an official kickoff session?' placeholder='Description Here..' />
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