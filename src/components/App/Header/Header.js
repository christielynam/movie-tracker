import React from 'react';
import UserControls from './UserControls/UserControls';
import FavoritesButton from './FavoritesButton/FavoritesButton';

const Header = () => {
  return(
    <header>
      <h1 className='title'>Movie Tracker</h1>
      <UserControls />
      <FavoritesButton />
    </header>
  )
}

export default Header;
