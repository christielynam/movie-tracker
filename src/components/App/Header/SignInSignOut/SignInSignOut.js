import React from 'react';
import { Link } from 'react-router-dom';

const SignInSignOut = (props) => {
  console.log('signinout comp props:', props)
  console.log('WHAT IS THE TRUTHY:', Object.keys({}).length ? 'true' : 'false')
  return(
    <div>

      { Object.keys(props.activeAccount).length > 0 &&
        <Link className='sign-out' to='/' onClick={() => {
        props.handleSignOut();
      }}> Sign Out </Link>
      }

      { Object.keys(props.activeAccount).length === 0 &&
        <Link className='sign-in' to='/signin'> Sign In </Link>
      }

    </div>
  )
}

export default SignInSignOut
