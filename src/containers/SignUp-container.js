import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SignUp from '../components/App/Account/SignUp/SignUp';
import { setActiveUser, fetchFavoriteMovies } from '../actions'
import { success } from 'react-notification-system-redux';


const mapStateToProps = (mall) => {
  return {
    activeAccount: mall.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignInSuccess: (data) => {
      dispatch(setActiveUser(data))
    },
    fetchUserFavorites: (data) => {
      dispatch(fetchFavoriteMovies(data))
    },
    changeRoute: (url) => {
      dispatch(push(url))
    },
    alertme: (notificationOpts) => {
      dispatch(success(notificationOpts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
