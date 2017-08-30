import { connect } from 'react-redux';
import Header from '../components/App/Header/Header';




const mapStateToProps = (store) => {
  return {
    movies: store.movies
  }
}

// const dispatchStateToProps = (dispatch) => {
//   return {
//
//   }
// }


export default connect(mapStateToProps, null)(Header);
