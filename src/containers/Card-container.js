import { connect } from 'react-redux';
import Card from '../components/App/Body/MovieDirectory/MovieCard/MovieCard';
import { addFavoriteMovies, success } from '../actions';

const mapStateToProps = (mall) => {
    return {
      movies: mall.movies,
      activeAccount: mall.account,
      notifications: mall.notifications
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addMovietoFavorites: (data) => {
        dispatch(addFavoriteMovies(data))
      },
      alertme: (notificationOpts) => {
        return dispatch(success(notificationOpts));
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);