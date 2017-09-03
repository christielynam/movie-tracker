
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
    // uid: 'once-please', // you can specify your own uid if required
    // title: title,
    // message: message,
    position: 'bl',
    autoDismiss: 4,
    dismissible: true,
    // action: {
    //   label: 'close'
    // },
    children: (
      <div className='popup-fav-addrem' style={{ backgroundImage: 'url(' + bgSrc + ')'}}>
        <p className='popup-fav-layer'>{title} <span className='popup-fav-sub-layer'>{message}</span></p>
      </div>
    )
  };

}



const addFavoritedMovie = (props)  => {
  const {movie, movies, addMovietoFavorites, activeAccount, alertme} = props;
  
  fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.movieId, user_id: activeAccount.id, title: movie.title, poster_path: movie.posterImg, release_date: movie.releaseDate, vote_average: movie.voteAverage, overview: movie.description  })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie)
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
  const { movie, movies, addMovietoFavorites, activeAccount, alertme, notifications } = props
  fetch(`/api/users/${activeAccount.id}/favorites/${movie.movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({ movie_id: movie.movieId, user_id: activeAccount.id })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie);
    let notifyReturn = alertme(genNotificationOpts('rem_fav', movie));
    console.log('RESULT OF REMOVE FAVORITE', res)})
}

const checkFavorite = (props) => {
  const { movie } = props
  console.log('movie: ', movie)
  console.log('isFavorited: ', movie.isFavorited)
  // is a user signed in?
  // YES: do this check
  movie.isFavorited ? removeFavoritedMovie(props) : addFavoritedMovie(props) 
  // NO: 
  // redirect the user to sign in
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
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.posterImg}`} />

    </div>
  )
}

export default MovieCard;