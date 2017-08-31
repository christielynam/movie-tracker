import React, { Component } from 'react';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      name: '',
    }
  }

  render() {
    return(
      <div>
        <h3>Sign In</h3>
        <input className='username'
               placeholder='Username'
        />
        <input className='password'
               placeholder='Password'
        />
        <button>Sign In</button>
      </div>
    )
  }
}
