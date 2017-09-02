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
    // console.log('signin props', props);
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

  clearInputs() {
    this.setState({
      email: '',
      password: ''
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
          // console.log('sign in success:', response.data);
          delete response.data.password;
          // console.log('after detelting password:', response.data);
          this.props.handleSignInSuccess(response.data);

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
              <Link className='signup-link' to='/signup' component={CreateUserAccount}>Sign up here</Link>
            </form>
          </div>
        }
      </div>
    )
  }
}
