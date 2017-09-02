import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CreateUserAccount from '../CreateUserAccount/CreateUserAccount'

// import { push } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory();

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
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
    fetch(`/api/users/${this.props.activeAccount.id}/favorites`)
      .then(res => res.json())
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

  signInUser(e) {
    e.preventDefault();


    const {email, password} = this.state;

    console.log('attemping to sign in');

    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
    }).then(results => results.json())
      .then(response => {
        if (response.status === 'success') {
          delete response.data.password;

          this.props.handleSignInSuccess(response.data);

          if (this.props.activeAccount.email === email) {
            this.updateLocalStorage();
            // now go set the isFavorited property
            this.retrieveFavoriteMovies();
            this.props.changeRoute('/');
            console.log('Current Signed In User:', this.props.activeAccount.name);
          }
        }
      })
      .catch(error => console.log('sign in failed: ', error))
  }


  render() {
    return(
      <div>

      { Object.keys(this.props.activeAccount).length > 0 &&
        <Redirect to='/' />
      }

        { Object.keys(this.props.activeAccount).length === 0 &&

          <div>
            <h3 className='sign-in-heading'>Sign In</h3>
            <form className='signin-form'>
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
            </form>
          </div>
        }
      </div>
    )
  }
}
