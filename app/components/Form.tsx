'use client';
import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='flex flex-col justify-center items-center gap-4'>
      <div>
        <label htmlFor='username' className='px-3'>
          Username
        </label>
        <input
          type='email'
          id='username'
          name='username'
          placeholder='John@doe.com'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className='text-black p-1 focus:outline-none align-middle'
        />
      </div>
      <div>
        <label htmlFor='password' className='px-3'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='text-black p-1 focus:outline-none align-middle'
        />
      </div>
      <div className='flex gap-3'>
        <button
          type='button'
          className='border-green-600 border rounded p-1 px-3 hover:bg-green-600 hover:text-stone-50'
        >
          Sign in
        </button>
        <button
          type='button'
          className='border-green-600 border rounded p-1 px-3 hover:bg-green-600 hover:text-stone-50'
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Form;
