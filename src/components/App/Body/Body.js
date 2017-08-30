import React from 'react';
import MovieDirectory from './MovieDirectory/MovieDirectory';




const Body = ({ movies }) => {
  return(
    <MovieDirectory movies = { movies } />
  )
}

export default Body;
