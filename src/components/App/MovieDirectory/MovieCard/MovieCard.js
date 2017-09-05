import React from 'react';

const genNotificationOpts = (type, movie) => {
  let title, message, bgSrc = '';
  title = `${movie.title}`;

  if (type === 'add_fav') {
    message = 'Added to Favorites';

  } else if (type === 'rem_fav') {
    message = 'Removed from Favorites';

  }

  bgSrc = `https://image.tmdb.org/t/p/w500${movie.posterImg}`

  return {
    position: 'bl',
    autoDismiss: 3,
    children: (
      <div className='popup-fav-addrem' style={{ backgroundImage: 'url(' + bgSrc + ')'}}>
        <p className='popup-fav-layer'>{title} <span className='popup-fav-sub-layer'>{message}</span></p>
      </div>
    )
  };

}



const addFavoritedMovie = (props)  => {
  const {movie, movies, addMovietoFavorites, activeAccount, alertme, favoritesCounter, increaseFavCount} = props;

  fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.movieId, user_id: activeAccount.id, title: movie.title, poster_path: movie.posterImg, release_date: movie.releaseDate, vote_average: movie.voteAverage, overview: movie.description  })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie)
    increaseFavCount()
    alertme(genNotificationOpts('add_fav', movie));
    console.log('RESULT OF ADD FAVORITE', res)})
  // .then(data => {
  //   fetch('https://api.wolframalpha.com/v1/simple?appid=5WP36U-TP8QL9U7L4&i=aaron+rodgers%3F')
  //   .then(res => res.json())
  //   .then(data => console.log('DDDDDAAAAAATTTTAAAAA:', data))
  // })
}

const removeFavoritedMovie = (props) => {
  console.log('REMOVE HIT!')
  console.log('PROPS @ DELETE FAV:', props)
  const { movie, movies, addMovietoFavorites, activeAccount, alertme, notifications, favoritesCounter, decreaseFavCount} = props
  fetch(`/api/users/${activeAccount.id}/favorites/${movie.movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({ movie_id: movie.movieId, user_id: activeAccount.id })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie);
    decreaseFavCount();
    let notifyReturn = alertme(genNotificationOpts('rem_fav', movie));
    console.log('RESULT OF REMOVE FAVORITE', res)})
}

const checkFavorite = (props) => {
  const { movie } = props;
  if (Object.keys(props.activeAccount).length === 0) {
    props.changeRoute('/signin')
  } else {
    movie.isFavorited ? removeFavoritedMovie(props) : addFavoritedMovie(props)
  }
}

const MovieCard = (props) => {
  const favClass = props.movie.isFavorited ? "favorite-movie-btn favorited-movie-active" : "favorite-movie-btn"

  return(
    <div className='movie-card'>
      <div className='button-container'>
        <button className={favClass}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  checkFavorite(props);
                }}
                ></button>
      </div>
      <img className='movie-poster' 
           src={`https://image.tmdb.org/t/p/w500${props.movie.posterImg}`}
           onClick={(e) => {
             e.preventDefault();
             console.log(props)
             props.changeRoute(`/fullmoviedetail/${props.movie.movieId}`);
           }}
            />
    </div>
  )
}

export default MovieCard;
