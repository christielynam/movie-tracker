import React from 'react';
import { Link } from 'react-router-dom';


const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'You have been Signed OUT!',
  message: 'Have a nice day!',
  position: 'tc',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('we can issue call backs from buttons clicked within the alert!')
  }
};


const SignInSignOut = (props) => {

  return(
    <div>
      { Object.keys(props.activeAccount).length > 0 &&
        <Link className='sign-out' to='/' onClick={() => {
        props.handleSignOut(); //remove active user
        // props.handleResetFavs();
        // props.resetFavCounter();
        props.changeRoute('/');
        props.alertme(notificationOpts);
      }}> Sign Out </Link>
      }
      { Object.keys(props.activeAccount).length === 0 &&
        <Link className='sign-in' to='/signin'> Sign In </Link>
      }
    </div>
  )
}

export default SignInSignOut
