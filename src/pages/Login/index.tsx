import React from 'react';
import Heading from '../../components/common/Heading';
import IconButton from '../../components/common/IconButton';

import Styles from '../Signup/styles.module.scss'


import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'


import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

import goggleImg from '../../assets/authImages/images/image-sliders/Google.png'

import TextFieldQa from '../../components/common/TextFieldQa';
import Button from '../../components/common/Button';

const Login = () => {
   return (
      <>
         <div className={`${Styles.signUpMain} ${Styles.dFlexRow} `}>
            <div className={Styles.w100}>
               <Heading label='Sign In' variant='heading1' />
               <div className={`${Styles.socialIcons} ${Styles.dFlexRow} `}>
                  <IconButton icon={<img src={goggleImg} alt='Goggle' />} />
                  <IconButton icon={<FontAwesomeIcon icon={faFacebookF} />} />
                  <IconButton icon={<FontAwesomeIcon icon={faTwitter} />} />
               </div>
               <div className={Styles.signUpForm}>
                  <TextFieldQa
                     icon={<FontAwesomeIcon icon={faEnvelope} />}
                     placeholder='youremail@gmail.com'
                     type='email'
                  />
                  <TextFieldQa
                     icon={<FontAwesomeIcon icon={faUser} />}
                     placeholder='********'
                     type='password'
                  />
                  <p className={`${Styles.rememText} ${Styles.dFlexRow}`}>
                     <span>
                        Remember me next time
                     </span>
                     <div className={Styles.customCheckbox}>
                        <input type="checkbox" id="rememberMeLogin" name="remember-me" className={Styles.rememberMe} />
                        <label htmlFor="remember-me" className={Styles.rememberCustom}></label>
                     </div>
                  </p>
                  <div className={Styles.signUpBtnLg}>
                     <Button
                        variant='filled'
                        color='secondary'
                        label='SIGN IN'
                        size='large'
                     />
                  </div>
                  <p className={Styles.rememText}>Forget password</p>
                  <p className={Styles.rememText}>
                     Don't have account?
                     <span>
                        <Link to={'/auth/signup'} className={Styles.cSecondary}>
                           Sign Up
                        </Link>
                     </span>
                  </p>

               </div>
            </div>
         </div>
      </>
   );
};

export default Login;
