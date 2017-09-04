import { connect } from 'react-redux';
import MovieCard from '../components/App/MovieDirectory/MovieCard/MovieCard';
import { addFavoriteMovies, success, favoritesCounter, increaseFavCount, decreaseFavCount } from '../actions';
import { push } from 'react-router-redux';


const mapStateToProps = (mall) => {
    return {
      movies: mall.movies,
      activeAccount: mall.account,
      notifications: mall.notifications,
      favoritesCounter: mall.favoritesCounter
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addMovietoFavorites: (data) => {
        dispatch(addFavoriteMovies(data))
      },
      alertme: (notificationOpts) => {
        return dispatch(success(notificationOpts));
      },
      increaseFavCount: (data) => {
        dispatch(increaseFavCount(data))
      },
      decreaseFavCount: (data) => {
        dispatch(decreaseFavCount(data))
      },
      changeRoute: (url) => {
        dispatch(push(url))
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
