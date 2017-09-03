import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import CreateUserAccount from '../components/App/Account/CreateUserAccount/CreateUserAccount';
import { setActiveUser, success, fetchFavoriteMovies,  } from '../actions'

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserAccount);
