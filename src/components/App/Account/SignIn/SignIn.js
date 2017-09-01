import React, { Component } from 'react';
import { Redirect } from 'react-router';
// import { push } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory();

export default class SignIn extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('signin props', props);
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

  updateLocalStorage(props) {
    localStorage.setItem('user', props.activeAccount)
  }

  clearInputs() {
    this.setState({
      email: '',
      password: ''
    })
  }

  signInUser(e) {
    e.preventDefault();

    // console.log('WHAT IS CONTEXT:', this.props)

    this.props.changeRoute('/')

    // dispatch(push('/'))

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
          console.log('sign in success:', response.data);
          delete response.data.password;
          console.log('after detelting password:', response.data);
          this.props.handleSignInSuccess(response.data);

          if (this.props.activeAccount.email === email) {
            this.updateLocalStorage();
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
              <button className='signin-btn' type='submit' onClick={this.signInUser.bind(this), this.clearInputs.bind(this)}>Sign In</button>
              <p className='new-user'>New to Movie Tracker?</p>
              {/* <Link */}
            </form>
          </div>
        }
      </div>
    )
  }
}
