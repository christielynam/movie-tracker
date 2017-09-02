import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import {fetchSignInUser} from '../../../../../utils/movieApi'
// import Notifications from 'react-notification-system-redux';
import Notifications from '../../../../containers/Notifications-container';
// import Notifications from '../../Notifications';

// import { push } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory();

const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s WHAT THE FUCK IS GOING ON!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};


export default class SignIn extends Component {
  constructor(props, context) {
    super(props, context);
    // console.log('signin props', props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  updateLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.props.activeAccount))
  }

  clearInputs() {
    this.setState({
      email: '',
      password: ''
    })
  }

  signInUser(e) {
    e.preventDefault();

    console.log("WHAST IS CONTEXT:", this.context)
    console.log("WHAST IS PROPS:", this.props)
    console.log("WHAST IS getState:", this.context.store.getState())
    
    
    const {email, password} = this.state;
    
    console.log('attemping to sign in');
    
    fetchSignInUser(email, password)
    .then(response => {
      if (response.status === 'success') {
        // console.log('sign in success:', response.data);
        delete response.data.password;
        // console.log('after detelting password:', response.data);
        this.props.handleSignInSuccess(response.data);
        //notificaiton
        this.props.alertme(notificationOpts);
        // console.log('WHAT IS CONTEXT@???!>>!>>@: ', this.context)
        // this.context.store.dispatch(success(notificationOpts));
        // this.forceUpdate();
          // this validates that the user we are trying to login as
          // actually got set to the store properly.
          if (this.props.activeAccount.email === email) {
            this.updateLocalStorage();
            // this.clearInputs();
            this.props.changeRoute('/');
            console.log('Current Signed In User:', this.props.activeAccount.name);
          }
        }
      })
      .catch(error => console.log('sign in failed: ', error))
  }


  render() {
    console.log('SIGN IN RENDER NOW!');
    return(
      <div>

      { Object.keys(this.props.activeAccount).length > 0 &&
        <Redirect to='/' />
      }

        { Object.keys(this.props.activeAccount).length === 0 &&

          <div>
            <h3 className='sign-in-heading'>Sign In</h3>
            <form>
              <input className='signin-email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e, 'email')}
              />
              <input className='signin-password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e, 'password')}
              />
              <button className='signin-btn' type='submit' onClick={this.signInUser.bind(this)}>Sign In</button>
              <p className='new-user'>New to Movie Tracker?</p>
            </form>
            </div>
          }
          <Notifications notifications={ this.props.notifications } />
          </div>
      )
    }
  }



SignIn.contextTypes = {
  store: React.PropTypes.object
};







SignIn.propTypes = {
  notifications: React.PropTypes.array
};

