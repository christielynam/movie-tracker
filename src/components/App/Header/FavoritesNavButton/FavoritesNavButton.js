import React from 'react';
import { Link } from 'react-router-dom';

const notificationOpts = {
  title: 'Whoops!',
  message: 'You currently have no movies selected as favorites',
  position: 'tc',
  autoDismiss: 4,
  action: {
    label: 'Click me!!'
  }
};

const handleFavoriteButton = (props) => {

  let userKeys = Object.keys(props.activeAccount)

  if (userKeys.length > 0 && props.favoritesCounter === 0) {
    props.alertme(notificationOpts)
    //notify user that they currently have no favorites selected
  }
  if (userKeys.length > 0 && props.favoritesCounter !== 0) {
    props.usersFavoriteMovies()
  }
  if (userKeys.length === 0) {
      props.changeRoute('/signin')
      console.log('MUST SIGN IN')
  }
}

const FavoritesNavButton = (props) => {
  const { favoritesCounter } = props
  console.log('fav counter', favoritesCounter);

  return(
    <div>
      <Link to='/favorites'
            className='favorites-nav-button'
            onClick={(e) => {
                e.preventDefault();
                handleFavoriteButton(props);
            {/* props.usersFavoriteMovies(); */}
            }}>Favorites: {favoritesCounter}</Link>
    </div>
  )
}

export default FavoritesNavButton
