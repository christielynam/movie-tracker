import React from 'react';
import PropTypes from 'prop-types';
// import NotificationsContainer from '../../containers/Notifications-container'

import * as actions from '../../actions';
// import {notifications as reducer} from '../../reducers/notifications-reducer';

import NotifySystem from 'react-notification-system';

export default class Notifications extends React.Component {

  system() {
    return this.refs.notify;
  }

  componentWillReceiveProps(nextProps) {
    // console.log("COMPONENT WILL RECEIVE PROPS")
    const { notifications } = nextProps;
    const notificationIds = notifications.map(notification => notification.uid);
    // const systemNotifications = this.system().state.notifications || [];
    const systemNotifications = this.props.notifications || [];

    if (notifications.length > 0) {
      // Get all active notifications from react-notification-system
      /// and remove all where uid is not found in the reducer
      (systemNotifications).forEach(notification => {
        if (notificationIds.indexOf(notification.uid) < 0) {
          this.system().removeNotification(notification.uid);
        }
      });

      notifications.forEach(notification => {
        this.system().addNotification({
          ...notification,
          onRemove: () => {
            this.context.store.dispatch(actions.hide(notification.uid));
            notification.onRemove && notification.onRemove();
          }
        });
      });
    }

    if ((this.props.notifications !== notifications) && notifications.length === 0) {
      this.system().clearNotifications();
    }
  }

  shouldComponentUpdate(nextProps) {
    // console.log("SHOULD COMPONENT UPDATE 1: ", this.props, '2:', nextProps);
    
    return this.props !== nextProps;
  }

  render() {
    const { notifications, ...rest } = this.props;
    // console.log("NOTIFICATION COMPONENT RENDER", this.props)

    return (
      <NotifySystem ref='notify' { ...rest } />
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array
};

Notifications.contextTypes = {
  store: PropTypes.object
};

// Tie actions to Notifications component instance
// Object.keys(actions).forEach(key => {
//   Notifications[key] = actions[key];
// });

// Notifications.reducer = reducer;

// export default Notifications;

// export default NotificationsContainer(Notifications);

// export default connect(
//   state => ({ notifications: state.notifications })
// )(Notifications);