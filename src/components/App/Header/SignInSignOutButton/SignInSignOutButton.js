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

        <Link className='sign-out'
              to='/'
              onClick={() => {
                props.handleSignOut();
                props.changeRoute('/');
                props.alertme(notificationOpts);
              }}>
              Sign Out
        </Link>

      }
      { Object.keys(props.activeAccount).length === 0 &&
        <Link className='sign-in'
          to='/signin'>
          Sign In
        </Link>
      }
    </div>
  )
}

export default SignInSignOutButton
