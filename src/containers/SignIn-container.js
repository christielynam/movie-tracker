import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import SignIn from '../components/App/Account/SignIn/SignIn';
import { setActiveUser, success } from '../actions'
// import { success } from 'react-notification-system-redux';

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
    changeRoute: (url) => {
      dispatch(push(url))
    },
    alertme: (notificationOpts) => {
      console.log('I AM IN ALERT ME!!!')
      dispatch(success(notificationOpts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);