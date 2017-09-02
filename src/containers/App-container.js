import { connect } from 'react-redux';
import App from '../components/App/App';
import { addRecentMovies } from '../actions';

const mapStateToProps = (mall) => {
  return {
    movies: mall.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecentMovies: (data) => {
      dispatch(addRecentMovies(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
