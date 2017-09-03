import React from 'react';
import CreateUserAccount from '../../../../containers/CreateUserAccount-container';
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
