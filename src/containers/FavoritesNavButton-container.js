import { connect } from 'react-redux';
import FavoritesNavButton from '../components/App/Header/FavoritesNavButton/FavoritesNavButton';
import { showFavoriteMovies } from '../actions';

const mapStateToProps = (mall) => {
    return {
      movies: mall.movies,
      activeAccount: mall.account
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      usersFavoriteMovies: (data) => {
        dispatch(showFavoriteMovies(data))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(FavoritesNavButton);