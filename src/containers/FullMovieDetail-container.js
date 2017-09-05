import { connect } from 'react-redux';
import FullMovieDetail from '../components/App/FullMovieDetail/FullMovieDetail'
import { push } from 'react-router-redux';

const mapStateToProps = (mall) => {
  return {
    movies: mall.movies,
    notifications: mall.notifications,
    activeAccount: mall.account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (url) => {
      dispatch(push(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullMovieDetail);
