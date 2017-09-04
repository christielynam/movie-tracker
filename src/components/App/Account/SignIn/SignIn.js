import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {fetchSignInUser} from '../../../../../utils/movieApi'
import { Link } from 'react-router-dom';
import CreateUserAccount from '../CreateUserAccount/CreateUserAccount'

// import { push } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory();

const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'You Signed in Successfully!',
  message: 'You can now add favorites :)',
  position: 'tc',
  autoDismiss: 0,
  action: {
    label: 'Click me!!'
  }
};

const notifyOptsBadSignIn = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Invalid Login',
  message: 'Please check your email and password',
  position: 'tc',
  autoDismiss: 0,
  action: {
    label: 'OK'
  }
};
// ,
// callback: () => alert('we can issue call backs from buttons clicked within the alert!')



export default class SignIn extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: ''
    };
  }


  shouldComponentUpdate(nextProps) {
    // console.log("SHOULD COMPONENT UPDATE 1: ", this.props, '2:', nextProps);
    let result =  this.props !== nextProps;
    // console.log('RESULT:', result, 'NEXT PROPS:', nextProps);
    return true;
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  updateLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.props.activeAccount))
  }

  retrieveFavoriteMovies(props) {
    const setFavCount = { props }
    fetch(`/api/users/${this.props.activeAccount.id}/favorites`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          if (data.data.length > 0) {
            this.props.fetchUserFavorites(data.data)
            console.log('listOFFavs: ', data.data.length)
            this.props.setFavCount(data.data.length)
          }
        } else {
          console.log('ERROR: grabbing favorites from db');
        }
      })
  }

  signInUser(e) {
    e.preventDefault();

    // console.log("WHAST IS CONTEXT:", this.context)
    // console.log("WHAST IS PROPS:", this.props)
    // console.log("WHAST IS getState:", this.context.store.getState())
    
    
    const {email, password} = this.state;

    fetchSignInUser(email, password)
    .then(response => {
      if (response.status === 'success') {
        // console.log('sign in success:', response.data);
        delete response.data.password;
        // console.log('after detelting password:', response.data);
        this.props.handleSignInSuccess(response.data); // adds user to store
        //notificaiton
        this.props.alertme(notificationOpts); // alert of new sign in
        // console.log('WHAT IS CONTEXT@???!>>!>>@: ', this.context)
        // this.context.store.dispatch(success(notificationOpts));
        // this.forceUpdate();
          // this validates that the user we are trying to login as
          // actually got set to the store properly.
          if (this.props.activeAccount.email === email) {
            this.updateLocalStorage();
            // this.clearInputs();
            this.retrieveFavoriteMovies();
            this.props.changeRoute('/');
            // console.log('Current Signed In User:', this.props.activeAccount.name);
          }
        }
      })
      // .then(data => {
      //   // console.log('2ND THEN:', data)
      //   this.props.alertme(notificationOpts);        
      // })
      .catch(error => {
        console.log('API ERROR: Login Failed: ', error);
        this.props.alertme(notifyOptsBadSignIn);
      })
  }




  render() {
    // console.log('SIGN IN RENDER NOW!', this.props);
    return(
      <div>

        { Object.keys(this.props.activeAccount).length > 0 &&
          <Redirect to='/' />
        }

        { Object.keys(this.props.activeAccount).length === 0 &&

          <div>
            <form className='signin-form'>
              <h3 className='sign-in-heading'>Sign In</h3>
              <input className='signin-email'
                    placeholder='Email'
                    autoFocus
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
              <Link className='signup-link' to='/signup'>Sign up here</Link>
              <Link className='cancel-signin' to='/'>Cancel</Link>
            </form>
            </div>
          }
          </div>
        )
      }
    }
    
    // <Notifications notifications={ this.props.notifications } />


SignIn.contextTypes = {
  store: React.PropTypes.object
};







SignIn.propTypes = {
  notifications: React.PropTypes.array
};

