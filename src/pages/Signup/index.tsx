import React from 'react';
import Heading from '../../components/common/Heading';
import IconButton from '../../components/common/IconButton';

import Styles from './styles.module.scss'

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import goggleImg from '../../assets/authImages/images/image-sliders/Google.png'
import TextFieldQa from '../../components/common/TextFieldQa';
import Button from '../../components/common/Button';

const Signup = () => {
   return (
      <>
         <div className={`${Styles.signUpMain} ${Styles.dFlexRow} `}>
            <div className={Styles.w100}>
               <Heading label='Getting started' variant='heading1' />
               <p>Create account to continue!</p>
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
                     placeholder='username21'
                  />
                  <TextFieldQa
                     icon={<FontAwesomeIcon icon={faLock} />}
                     placeholder='********'
                     type='password'
                  />

                  <p className={`${Styles.rememText} ${Styles.dFlexRow}`}>
                     <span>
                        Remember me next time
                     </span>
                     <div className={Styles.customCheckbox}>
                        <input type="checkbox" id="rememberMeSignUp" name="remember-me" className={Styles.rememberMe} />
                        <label htmlFor="remember-me" className={Styles.rememberCustom}></label>
                     </div>
                  </p>
                  <div className={Styles.signUpBtnLg}>
                     <Button
                        variant='filled'
                        color='secondary'
                        label='SIGN UP'
                        size='large'
                     />
                  </div>
                  <p className={Styles.rememText}>Forget password</p>
                  <p className={Styles.rememText}>
                     Already have an account?
                     <span>
                        <Link to={'/auth/login'} className={Styles.cSecondary}>
                           Sign in
                        </Link>
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Signup;
