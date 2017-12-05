import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  }
}

const FavoritesNavButton = (props) => {
  const { favoritesCounter } = props

  return (
    <div className='btn-container'>
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


FavoritesNavButton.propTypes = {
  props: PropTypes.object,
  props: PropTypes.shape({
    activeAccount: PropTypes.object,
    alertme: PropTypes.func,
    changeRoute: PropTypes.func,
    favoritesCounter: PropTypes.number,
    movies: PropTypes.array,
    usersFavoriteMovies: PropTypes.func
  })
};