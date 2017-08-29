import { connect } from 'react-redux';
import Body from '../components/App/Body';
import FullMovieDetail from '../components/App/Body/FullMovieDetail';
import MovieDirectory from '../components/App/Body/MovieDirectory';
import MovieCard from '../components/App/Body/MovieDirectory/MovieCard';

export default connect(mapStateToProps, mapDispatchToProps)([Body, FullMovieDetail, MovieDirectory, MovieCard]);