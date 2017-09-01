import { connect } from 'react-redux';
import MovieDirectory from '../components/App/Body/MovieDirectory/MovieDirectory';




const mapStateToProps = (store) => {
  return {
    movies: store.movies
  }
}

export default connect(mapStateToProps, null)(MovieDirectory);
