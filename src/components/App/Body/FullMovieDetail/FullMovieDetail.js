import React from 'react';

const FullMovieDetail(movie) {

    const favClass = props.movie.isFavorited ? "favorite-movie-btn favorited-movie-active" : "favorite-movie-btn"

    return(
        <div>
        <h3>${movie.title}</h3>
        <button className={favClass}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  checkFavorite(props);
                }}
                ></button>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.posterImg}`} />
        <p>${movie.releaseDate}</p>
        <p>${movie.voteAverage}</p>
        <p>${movie.description}</p>
        </div>
    )
}