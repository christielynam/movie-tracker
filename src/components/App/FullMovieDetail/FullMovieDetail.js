import React from 'react';
import { withRouter } from 'react-router-dom'

const FullMovieDetail = (props) => {
    const selectedId = props.location.pathname.replace('/fullmoviedetail/', '')
    console.log('location: ', selectedId)
    const selectedArray = props.movies.filter( movie => {
        console.log(selectedId, movie.movieId)
       return movie.movieId == selectedId
    });
    const selectedMovie = selectedArray[0]
    console.log('selectedMovie: ', selectedMovie)
    const favClass = selectedMovie.isFavorited ? "favorite-movie-btn favorited-movie-active" : "favorite-movie-btn"
    
    return(
        <div className='movie-detail'
             onClick={(e) => {
             e.preventDefault();
             props.changeRoute(`/`);
           }}>
            <h2>{selectedMovie.title}</h2>
            <img className='movie-poster-detail' src={`https://image.tmdb.org/t/p/w500${selectedMovie.posterImg}`} />
            <p>Released: {selectedMovie.releaseDate}</p>
            <p>Rating: {selectedMovie.voteAverage}</p>
            <p>Summary: {selectedMovie.description}</p>
        </div>
    )
}


export default withRouter(FullMovieDetail);
