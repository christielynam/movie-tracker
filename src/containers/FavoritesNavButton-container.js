import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import FavoritesNavButton from '../components/App/Header/FavoritesNavButton/FavoritesNavButton';
import { showFavoriteMovies } from '../actions';

const mapStateToProps = (mall) => {
    return {
      movies: mall.movies,
      activeAccount: mall.account,
      favoritesCounter: mall.favoritesCounter
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      usersFavoriteMovies: (data) => {
        dispatch(showFavoriteMovies(data))
      },
      changeRoute: (url) => {
        dispatch(push(url))
      },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(FavoritesNavButton);