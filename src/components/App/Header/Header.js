import React from 'react';
import UserControls from './UserControls/UserControls';
// import FavoritesButton from './FavoritesButton/FavoritesButton';

const Header = () => {
  // <FavoritesButton />
  return(
    <header>
      <h1 className='title'>Movie Tracker</h1>
      <button className="signIn-btn">Sign In</button>
      {/* <UserControls /> */}
    </header>
  )
}

export default Header;
