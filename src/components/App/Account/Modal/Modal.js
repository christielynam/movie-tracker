import React from 'react';
import CreateUserAccount from '../CreateUserAccount/CreateUserAccount';
import SignIn from '../../../../containers/SignIn-container';


const Modal = ({ action }) => {
//look into history obj
  return(
    <section className='modal'>
      {action === 'signup' && <CreateUserAccount />}
      {action === 'signin' && <SignIn />}
    </section>
  )
}

export default Modal
