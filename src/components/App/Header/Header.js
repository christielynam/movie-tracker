import React from 'react';
import SignInSignOutContainer from '../../../containers/SignInSignOut-container';
import FavoritesNavButton from '../../../containers/FavoritesNavButton-container';
import { Link } from 'react-router-dom';


const Header = () => {

  return(
    <header className='header'>
      <Link to='/'
            className='title'>
            Movie Tracker
      </Link>
      <FavoritesNavButton />
      <SignInSignOutContainer />
    </header>
  )
}

export default Header;
