import React from 'react';
import { Link } from 'react-router-dom';

const notificationOpts = {
  title: 'You have been Signed Out!',
  message: 'Have a nice day!',
  position: 'tc',
  autoDismiss: 3
};


const SignInSignOutButton = (props) => {

  return(
    <div>
      { Object.keys(props.activeAccount).length > 0 &&

        <div className='signIn-signOut-container'>
          <p className='welcome-message'>{`Welcome, ${props.activeAccount.name}!`}</p>

          <Link className='sign-out'
                to='/'
                onClick={() => {
                  props.handleSignOut();
                  props.changeRoute('/');
                  props.alertme(notificationOpts);
                }}>
                Sign Out
          </Link>
        </div>

      }
      { Object.keys(props.activeAccount).length === 0 &&

        <div className='signIn-signOut-container'>
          <p className='welcome-message'>Welcome!</p>

          <Link className='sign-in'
                to='/signin'>
                Sign In
          </Link>
        </div>
      }
    </div>
  )
}

export default SignInSignOutButton
