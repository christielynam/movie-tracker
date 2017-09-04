import React from 'react';
import { Link } from 'react-router-dom';

const notificationOpts = {
  title: 'Whoops!',
  message: 'You currently have no movies selected as favorites',
  position: 'tc',
  autoDismiss: 3
};

const handleFavoriteButton = (props) => {

  let userKeys = Object.keys(props.activeAccount)

  if (userKeys.length > 0 && props.favoritesCounter === 0) {
    props.alertme(notificationOpts)
  }
  if (userKeys.length > 0 && props.favoritesCounter !== 0) {
    props.usersFavoriteMovies()
    props.changeRoute('/favorites')
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
      <Link to='/favories'
            className='favorites-nav-button'
            onClick={(e) => {
                e.preventDefault();
                handleFavoriteButton(props);
            }}>
            Favorites: {favoritesCounter}
      </Link>
    </div>
  )
}

export default FavoritesNavButton
