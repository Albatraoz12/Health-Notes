'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 w-[90%] md:w-[auto]'>
      <div className=''>
        <form className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-center text-gray-700 dark:text-gray-100'>
            Sign In
          </h2>

          <div className='flex flex-col'>
            <label
              htmlFor='username'
              className='text-sm font-medium text-gray-600 dark:text-gray-300 px-1'
            >
              Username
            </label>
            <input
              type='email'
              id='username'
              name='username'
              placeholder='John@doe.com'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className='mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400'
            />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='password'
              className='text-sm font-medium text-gray-600 dark:text-gray-300 px-1'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400'
            />
          </div>

          <div className='flex gap-3 justify-center'>
            <button
              type='button'
              className='p-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              Sign in
            </button>
            <Link
              href='/signup'
              className='p-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
