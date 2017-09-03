import React from 'react';
import SignInSignOutContainer from '../../../containers/SignInSignOut-container';
import FavoritesNavButton from '../../../containers/FavoritesNavButton-container';
// import movieIMG from './44808-O4G0M1.jpg'
// import FavoritesButton from './FavoritesNavButton/FavoritesNavButton';

const Header = () => {
  
  return(
    <header className='header'>
      <h1 className='title'>Movie Tracker</h1>
      {/* <img src={movieImg} alt='movie accessories' /> */}
      <FavoritesNavButton />
      <SignInSignOutContainer />
    </header>
  )
}

export default Header;
