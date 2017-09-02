import React from 'react';
import SignInSignOutContainer from '../../../containers/SignInSignOut-container';
// import movieIMG from './44808-O4G0M1.jpg'
// import FavoritesButton from './FavoritesButton/FavoritesButton';

const Header = () => {
  // <FavoritesButton />
  return(
    <header className='header'>
      <h1 className='title'>Movie Tracker</h1>
      {/* <img src={movieImg} alt='movie accessories' /> */}
      <SignInSignOutContainer />
    </header>
  )
}

export default Header;
