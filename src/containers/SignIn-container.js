import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import SignIn from '../components/App/Account/SignIn/SignIn';
import { setActiveUser } from '../actions'

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);