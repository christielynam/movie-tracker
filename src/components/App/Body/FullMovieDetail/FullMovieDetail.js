import React from 'react';

const FullMovieDetail = (props) => {

    const favClass = props.movie.isFavorited ? "favorite-movie-btn favorited-movie-active" : "favorite-movie-btn"

    return(
        <div>
        <h3>${props.movie.title}</h3>
        <button className={favClass}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  checkFavorite(props);
                }}
                ></button>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.posterImg}`} />
        <p>${props.movie.releaseDate}</p>
        <p>${props.movie.voteAverage}</p>
        <p>${props.movie.description}</p>
        </div>
    )
}

export default FullMovieDetail;
