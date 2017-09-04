import React from 'react';
import CreateUserAccount from '../../../../containers/CreateUserAccount-container';
import SignIn from '../../../../containers/SignIn-container';


const Modal = ({ action }) => {
//look into history obj
  return(
    <div className='modal-backdrop'>
      <section className='modal'>
        {action === 'signup' && <CreateUserAccount />}
        {action === 'signin' && <SignIn />}
      </section>
    </div>

  )
}

export default Modal
