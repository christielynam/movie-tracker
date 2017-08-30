import React from 'react';

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
      </form>
    </section>
  );
}

export default CreateUserAccount;