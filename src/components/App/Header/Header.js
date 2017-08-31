import React from 'react';
import SignInSignOut from './SignInSignOut/SignInSignOut'
// import FavoritesButton from './FavoritesButton/FavoritesButton';

const Header = () => {
  // <FavoritesButton />
  return(
    <header>
      <h1 className='title'>Movie Tracker</h1>
      <SignInSignOut />
    </header>
  )
}

export default Header;
