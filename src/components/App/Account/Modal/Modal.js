import React from 'react';
import SignUp from '../../../../containers/SignUp-container';
import SignIn from '../../../../containers/SignIn-container';


const Modal = ({ action }) => {
//look into history obj
  return(
    <div className='modal-backdrop'>
      <section className='modal'>
        {action === 'signup' && <SignUp />}
        {action === 'signin' && <SignIn />}
      </section>
    </div>

  )
}

export default Modal
