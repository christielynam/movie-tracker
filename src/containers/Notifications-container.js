import { connect } from 'react-redux';
import Notifications from '../components/App/Notifications';
import { success } from '../actions'
// import { success } from 'react-notification-system-redux';

const mapStateToProps = (mall) => {
  return {
    notifications: mall.notifications
  }
}

export default connect(mapStateToProps, null)(Notifications);

// export default connect(
//   state => ({ notifications: state.notifications })
// );