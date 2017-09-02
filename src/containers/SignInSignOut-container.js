import { connect } from 'react-redux';
import SignInSignOut from '../components/App/Header/SignInSignOut/SignInSignOut';
import { removeActiveUser, removeAllIsFavorited, success } from '../actions'

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
    alertme: (notificationOpts) => {
      dispatch(success(notificationOpts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInSignOut);