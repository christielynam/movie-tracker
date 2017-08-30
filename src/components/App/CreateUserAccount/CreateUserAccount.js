import React from 'react';

const testAddUser = () => {
  console.log('ADDING NEW USER');

  fetch('/api/users/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'nick', password: 'hello', email: 'nick@nick.com' })
  }).then(res => res.json())
    .then(res => console.log('RESULT OF ADD USER:', res));

}

const CreateUserAccount = () => {
  return (
    <section>
      <form>
        <h3>Create New Account</h3>
        <label>
          Name:
          <input className='newuser-name' type='text' placeholder='name' />
        </label>
        <label>
          Username/Email:
          <input className='newuser-email' type='text' placeholder='email' />
        </label>
        <label>
          Password:
          <input className='newuser-password' type='text' placeholder='password' />
        </label>
        <label>
          Confirm Password:
          <input className='newuser-password' type='text' placeholder='confirm password' />
        </label>
        <button type='submit' onClick={(e) => {
          e.preventDefault();
          testAddUser();
        }}>Sign Up</button>
      </form>
    </section>
  );
}

export default CreateUserAccount;