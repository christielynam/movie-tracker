import { connect } from 'react-redux';
import App from '../components/App/App';
import { addRecentMovies, fetchFavoriteMovies, setActiveUser } from '../actions';

const mapStateToProps = (mall) => {
  return {
    movies: mall.movies,
    activeAccount: mall.account
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
