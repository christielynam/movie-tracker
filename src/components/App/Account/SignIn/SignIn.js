import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { fetchSignInUser, fetchFavoriteMovies} from '../../../../../utils/movieApi'
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import PropTypes from 'prop-types';

const notificationOpts = {
  title: 'You Signed in Successfully!',
  message: 'You can now add favorites :)',
  position: 'tc',
  autoDismiss: 3
};

const notifyOptsBadSignIn = {
  title: 'Invalid Login',
  message: 'Please check your email and password',
  position: 'tc',
  autoDismiss: 0,
  action: {
    label: 'OK'
  }
};

export default class SignIn extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: ''
    };
  }


  shouldComponentUpdate(nextProps) {
    let result =  this.props !== nextProps;
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

  retrieveFavoriteMovies() {
    fetchFavoriteMovies(this.props.activeAccount.id)
    .then(data => {
      if (data.status === 'success') {
        if (data.data.length > 0) {
          this.props.fetchUserFavorites(data.data)
          this.props.setFavCount(data.data.length)
        }
      } else {
        console.log('ERROR: grabbing favorites from db');
      }
    })
  }

  signInUser(e) {
    e.preventDefault();

    const {email, password} = this.state;

    fetchSignInUser(email, password)
    .then(response => {
      if (response.status === 'success') {
        delete response.data.password;
        this.props.handleSignInSuccess(response.data);
        this.props.alertme(notificationOpts);
          if (this.props.activeAccount.email === email) {
            this.updateLocalStorage();
            this.retrieveFavoriteMovies();
            this.props.changeRoute('/');
          }
        }
      })
      .catch(error => {
        console.log('API ERROR: Login Failed: ', error);
        this.props.alertme(notifyOptsBadSignIn);
      })
  }

  render() {
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
                     required
                     value={this.state.email}
                     onChange={(e) => this.handleChange(e, 'email')}
              />
              <input className='signin-password'
                     placeholder='Password'
                     required
                     value={this.state.password}
                     onChange={(e) => this.handleChange(e, 'password')}
              />
              <button className='signin-btn'
                      type='submit'
                      disabled={!this.state.email || !this.state.password}
                      onClick={this.signInUser.bind(this)}>
                      Sign In
              </button>
              <p className='new-user'>New to Movie Tracker?</p>
              <Link className='signup-link'
                    to='/signup'>
                    Sign up here
              </Link>
              <Link className='cancel-signin'
                    to='/'>
                    Cancel
              </Link>
            </form>
            </div>
          }
          </div>
        )
      }
    }

SignIn.contextTypes = {
  store: React.PropTypes.object
};


SignIn.propTypes = {
  notifications: React.PropTypes.array,
  props: PropTypes.object,
  props: PropTypes.shape({
    activeAccount: PropTypes.object,
    alertme: PropTypes.func,
    changeRoute: PropTypes.func,
    fetchUserFavorites: PropTypes.func,
    handleSignInSuccess: PropTypes.func,
    setFavCount: PropTypes.func,
  })
};
