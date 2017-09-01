import { connect } from 'react-redux';
import Card from '../components/App/Body/MovieDirectory/MovieCard/MovieCard';
import { addFavoriteMovies } from '../actions';

const mapStateToProps = (store) => {
    return {
      movies: store.movies
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addFavoriteMovie: (data) => {
        dispatch(addFavoriteMovies(data))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);