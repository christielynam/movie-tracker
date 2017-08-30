import React, { Component } from 'react';

export default class UserControls extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
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
        <button>Log In</button>
      </div>
    )
  }
}
