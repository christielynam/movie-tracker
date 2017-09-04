import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import SignIn from '../components/App/Account/SignIn/SignIn';
import { setActiveUser, fetchFavoriteMovies, setFavCount } from '../actions'
import { success } from 'react-notification-system-redux';

const mapStateToProps = (store) => {
  return {
    activeAccount: store.account
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
    },
    setFavCount: (data) => {
      dispatch(setFavCount(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);