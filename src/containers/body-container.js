import { connect } from 'react-redux';
import Body from '../components/App/Body';
import FullMovieDetail from '../components/App/Body/FullMovieDetail';
import MovieDirectory from '../components/App/Body/MovieDirectory';
import MovieCard from '../components/App/Body/MovieDirectory/MovieCard';


const mapStateToProps = (state) => {
  return {

  }
}

const dispatchStateToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)([Body, FullMovieDetail, MovieDirectory, MovieCard]);

//dont think we need a body container
//we will just need containers for any component that needs access to the store ie... movieDirectory, FullMovieDetail, MovieCard
