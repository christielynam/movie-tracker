import React, { Component } from 'react';

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
          console.log('sign in success:', response.data);
          delete response.data.password;
          console.log('after detelting password:', response.data);
          this.props.handleSignInSuccess(response.data);
        }
      })
      .catch(error => console.log('sign in failed: ', error))
  }

  render() {
    return(
      <div>
        <h3>Sign In</h3>
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
          <button type='submit' onClick={this.signInUser.bind(this)}>Sign In</button>
        </form>
      </div>
    )
  }
}
