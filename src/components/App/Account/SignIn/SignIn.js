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
