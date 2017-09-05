import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { fetchSignInUser, fetchFavoriteMovies, fetchCreateUser } from '../../../../../utils/movieApi';
import PropTypes from 'prop-types';

const notifyOptsPasswordsDontMatch = {
  title: 'Try again...',
  message: 'The passwords you entered do not match',
  position: 'tc',
  autoDismiss: 0,
  action: {
    label: 'OK'
  }
}

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  genNotificationOpts = (name) => {
    return {
      title: `Hi ${name}, Welcome to Movie Tracker!`,
      position: 'tc',
      autoDismiss: 3
    }
  }

  genNotifyOptsEmailExists = (email = 'invalid') => {
    let message = (email === 'invalid')
                  ? 'Please try again'
                  : `${email} already in use`
    return {
      title: 'Could not create your account',
      message: message,
      position: 'tc',
      autoDismiss: 0,
      action: {
        label: 'OK'
      }
    }
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  validatePassword() {
    return (this.state.password === this.state.confirmPassword) ? true : false
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
          }
        } else {
          console.log('ERROR: grabbing favorites from db');
        }
      })
  }

  autoSignInUser(name, email, password) {
    fetchSignInUser(email, password).then(res => {
      if (res.status === 'success') {
        delete res.data.password;
        this.props.handleSignInSuccess(res.data);
        this.props.alertme(this.genNotificationOpts(name));
        if (this.props.activeAccount.email === email) {
          this.updateLocalStorage();
          this.retrieveFavoriteMovies();
          this.props.changeRoute('/');
        }
      }
    })
  }

  testAddUser() {
    const { name, email, password } = this.state

    let didMatch = this.validatePassword()
    if(didMatch) {
      fetchCreateUser(name, email, password)
        .then(res => {
          if (res.status === 'success') {
            this.autoSignInUser(name, email, password);
          } else if (res.error.includes('already exists')) {
            this.props.alertme(this.genNotifyOptsEmailExists(email));
          } else {
            this.props.alertme(this.genNotifyOptsEmailExists());
          }
        })
        .catch(error => {
          this.props.alertme(this.genNotifyOptsEmailExists());
        })
    } else {
      this.props.alertme(notifyOptsPasswordsDontMatch)
    }
  }

  render() {

    const { name, email, password, confirmPassword } = this.state

    return(
      <section>
        <form className='create-user-form'>
          <h3 className='create-account-heading'>
              Create New Account
          </h3>
          <input className='newuser-name'
                 type='text'
                 placeholder='name'
                 autoFocus value={name}
                 onChange={(e) => this.handleChange(e, 'name')}
          />
          <input className='newuser-email'
                 type='text'
                 placeholder='email'
                 value={email}
                 onChange={(e) => this.handleChange(e, 'email')}
          />
          <input className='newuser-password'
                 type='text'
                 placeholder='password'
                 value={password}
                 onChange={(e) => this.handleChange(e, 'password')}
          />
          <input className='newuser-password confirm-password'
                 type='text'
                 placeholder='confirm password' value={confirmPassword}
                 onChange={(e) => this.handleChange(e, 'confirmPassword')}
          />
          <button className='signup-btn'
                  type='submit'
                  disabled={!this.state.name || !this.state.email || !this.state.password || !this.state.confirmPassword}
                  onClick={(e) => {
                    e.preventDefault();
                    this.testAddUser();
                  }}>
                  Sign Up
          </button>
          <Link className='cancel-signup'
                to='/'>
                Cancel
          </Link>
        </form>
      </section>
    )
  }
}

SignUp.propTypes = {
  props: PropTypes.object,
  props: PropTypes.shape({
    activeAccount: PropTypes.object,
    alertme: PropTypes.func,
    changeRoute: PropTypes.func,
    fetchUserFavorites: PropTypes.func,
    handleSignInSuccess: PropTypes.func,
  })
};
