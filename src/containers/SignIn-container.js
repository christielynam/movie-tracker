import { connect } from 'react-redux';
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);