import { connect } from 'react-redux';
import App from '../components/App/App';
import { addRecentMovies, fetchFavoriteMovies, setActiveUser, setFavCount, showFavoriteMovies, resetFavCounter } from '../actions';

const mapStateToProps = (mall) => {
  return {
    movies: mall.movies,
    notifications: mall.notifications,
    activeAccount: mall.account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecentMovies: (data) => {
      dispatch(addRecentMovies(data))
    },
    fetchUserFavorites: (data) => {
      dispatch(fetchFavoriteMovies(data))
    },
    handleSignInSuccess: (data) => {
      dispatch(setActiveUser(data))
    },
    setFavCount: (data) => {
      dispatch(setFavCount(data))
    },
    usersFavoriteMovies: (data) => {
      dispatch(showFavoriteMovies(data))
    },
    resetFavCounter: () => {
      dispatch(resetFavCounter())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
