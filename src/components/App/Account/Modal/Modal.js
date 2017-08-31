import React from 'react';
import CreateUserAccount from '../CreateUserAccount/CreateUserAccount';
import SignIn from '../SignIn/SignIn';


const Modal = ({ action }) => {
//look into history obj
  return(
    <section>
      {action === 'signup' && <CreateUserAccount />}
      {action === 'signin' && <SignIn />}
    </section>
  )
}

export default Modal
