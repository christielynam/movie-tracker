import { connect } from 'react-redux';
import Header from '../components/App/Header';
import UserControls from '../components/App/Header/UserControls';
import FavoritesButton from '../components/App/Header/FavoritesButton';

const mapStateToProps = (state) => {
  return {

  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)([Header, UserControls, FavoritesButton]);
