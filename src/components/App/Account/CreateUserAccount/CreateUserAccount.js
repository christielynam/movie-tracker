import React, {Component} from 'react';

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

  

  clearInputs(status) {

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
        <form>
          <h3>Create New Account</h3>
          <label>
            Name:
            <input className='newuser-name' type='text' placeholder='name' value={name} onChange={(e) => this.handleChange(e, 'name')} />
          </label>
          <label>
            Username/Email:
            <input className='newuser-email' type='text' placeholder='email' value={email} onChange={(e) => this.handleChange(e, 'email')} />
          </label>
          <label>
            Password:
            <input className='newuser-password' type='text' placeholder='password' value={password} onChange={(e) => this.handleChange(e, 'password')} />
          </label>
          <label>
            Confirm Password:
            <input className='newuser-password' type='text' placeholder='password' value={confirmPassword} onChange={(e) => this.handleChange(e, 'confirmPassword')} />
          </label>
          <button type='submit' onClick={(e) => {
            e.preventDefault();
            this.testAddUser();
          }}>Sign Up</button>
        </form>
      </section>
    )
  }
}
