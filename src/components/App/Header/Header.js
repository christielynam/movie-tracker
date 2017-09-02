import React from 'react';
import SignInSignOutContainer from '../../../containers/SignInSignOut-container'
// import FavoritesButton from './FavoritesButton/FavoritesButton';

const Header = () => {
  // <FavoritesButton />
  return(
    <header className='header'>
      <h1 className='title'>Movie Tracker</h1>
      <SignInSignOutContainer />
    </header>
  )
}

export default Header;
