import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class CreateUserAccount extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
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

  testAddUser() {
    const { name, email, password } = this.state

    let didMatch = this.validatePassword()
    if(didMatch) {
      fetch('/api/users/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, password: password, email: email })
      }).then(res => res.json())
        .then(res => console.log('RESULT OF ADD USER:', res));
    } else {
      alert('Passwords do not match')
    }
  }

  render() {

    const { name, email, password, confirmPassword } = this.state

    return(
      <section>
        <form className='create-user-form'>

          <h3 className='create-account-heading'>Create New Account</h3>

          <input className='newuser-name' type='text' placeholder='name' autoFocus value={name} onChange={(e) => this.handleChange(e, 'name')} />

          <input className='newuser-email' type='text' placeholder='email' value={email} onChange={(e) => this.handleChange(e, 'email')} />

          <input className='newuser-password' type='text' placeholder='password' value={password} onChange={(e) => this.handleChange(e, 'password')} />

          <input className='newuser-password confirm-password' type='text' placeholder='confirm password' value={confirmPassword} onChange={(e) => this.handleChange(e, 'confirmPassword')} />

          <button className='signup-btn' type='submit' onClick={(e) => {
            e.preventDefault();
            this.testAddUser();
          }}>Sign Up</button>
          {/* // TODO: need to sign user in after new account set up */}
          <Link className='cancel-signup' to='/'>Cancel</Link>

        </form>
      </section>
    )
  }
}
