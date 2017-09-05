import React from 'react';
import SignUp from '../../../../containers/SignUp-container';
import SignIn from '../../../../containers/SignIn-container';
import FullMovieDetail from '../../../../containers/FullMovieDetail-container';
import PropTypes from 'prop-types';


const Modal = ({ action }) => {

  let modalClass = (action === 'fullmoviedetail') ? 'modal fullmovie-modal' : 'modal'

  return(
    <div className='modal-backdrop'>
      <section className={modalClass}>
        {action === 'signup' && <SignUp />}
        {action === 'signin' && <SignIn />}
        {action === 'fullmoviedetail' && <FullMovieDetail />}
      </section>
    </div>
  )
}

export default Modal;

Modal.propTypes = {
  action: PropTypes.string
}
