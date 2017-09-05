import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SignInSignOutButton from '../components/App/Header/SignInSignOutButton/SignInSignOutButton';
import { removeActiveUser, removeAllIsFavorited, resetFavCounter } from '../actions';
import { success } from 'react-notification-system-redux';

const mapStateToProps = (store) => {
  return {
    activeAccount: store.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: (data) => {
      dispatch(removeActiveUser(data))
    },
    handleResetFavs: () => {
      dispatch(removeAllIsFavorited())
    },
    changeRoute: (url) => {
      dispatch(push(url))
    },
    alertme: (notificationOpts) => {
      dispatch(success(notificationOpts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInSignOutButton);