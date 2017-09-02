import { connect } from 'react-redux';
import Card from '../components/App/Body/MovieDirectory/MovieCard/MovieCard';
import { addFavoriteMovies } from '../actions';

const mapStateToProps = (mall) => {
    return {
      movies: mall.movies
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addMovietoFavorites: (data) => {
        dispatch(addFavoriteMovies(data))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);