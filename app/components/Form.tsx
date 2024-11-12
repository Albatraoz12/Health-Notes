'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const Form = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      ...formData,
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <main className='flex items-center bg-gray-100 dark:bg-gray-900'>
      <form
        className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-6'
        onSubmit={handleSignIn}
      >
        <h2 className='text-2xl font-semibold text-center text-gray-700 dark:text-gray-100'>
          Sign In
        </h2>

        <div className='flex flex-col'>
          <label
            htmlFor='email'
            className='text-sm font-medium text-gray-600 dark:text-gray-300 px-1'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='John@doe.com'
            onChange={handleChange}
            value={formData.email}
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
            onChange={handleChange}
            value={formData.password}
            className='mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400'
          />
        </div>

        <div className='flex gap-3 justify-center'>
          <button
            type='submit'
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
    </main>
  );
};

export default Form;
