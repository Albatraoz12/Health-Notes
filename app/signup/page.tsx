'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('User registered successfully');
    } else {
      alert('Failed to register user');
    }
  };

  return (
    <main className='flex justify-center items-center mt-10 bg-gray-100 dark:bg-gray-900'>
      <form
        onSubmit={handleSubmit}
        className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md flex flex-col gap-6 w-[90%] md:w-full'
      >
        <h2 className='text-2xl font-semibold text-center text-gray-700 dark:text-gray-100'>
          Sign Up
        </h2>

        <div className='flex flex-col'>
          <label
            htmlFor='firstName'
            className='text-sm font-medium text-gray-600 dark:text-gray-300'
          >
            First name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='John'
            onChange={handleChange}
            value={formData.firstName}
            required
            className='mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400'
          />
        </div>

        <div className='flex flex-col'>
          <label
            htmlFor='lastName'
            className='text-sm font-medium text-gray-600 dark:text-gray-300'
          >
            Last name
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Doe'
            onChange={handleChange}
            value={formData.lastName}
            required
            className='mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400'
          />
        </div>

        {/* Gender selection */}
        <div className='flex flex-col'>
          <label className='text-sm font-medium text-gray-600 dark:text-gray-300'>
            Gender
          </label>
          <div className='flex gap-4 mt-2'>
            <div className='flex items-center'>
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                onChange={handleChange}
                checked={formData.gender === 'male'}
                className='focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='male'
                className='ml-2 text-gray-600 dark:text-gray-300'
              >
                Male
              </label>
            </div>
            <div className='flex items-center'>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                onChange={handleChange}
                checked={formData.gender === 'female'}
                className='focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='female'
                className='ml-2 text-gray-600 dark:text-gray-300'
              >
                Female
              </label>
            </div>
            <div className='flex items-center'>
              <input
                type='radio'
                id='other'
                name='gender'
                value='other'
                onChange={handleChange}
                checked={formData.gender === 'other'}
                className='focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='other'
                className='ml-2 text-gray-600 dark:text-gray-300'
              >
                Other
              </label>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <label
            htmlFor='email'
            className='text-sm font-medium text-gray-600 dark:text-gray-300'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='you@example.com'
            onChange={handleChange}
            value={formData.email}
            required
            className='mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400'
          />
        </div>

        <div className='flex flex-col'>
          <label
            htmlFor='password'
            className='text-sm font-medium text-gray-600 dark:text-gray-300'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
            onChange={handleChange}
            value={formData.password}
            required
            className='mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400'
          />
        </div>

        <div className='flex justify-around items-center'>
          <Link
            href='/'
            className='mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600'
          >
            Go back
          </Link>
          <button
            type='submit'
            className='mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600'
          >
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
};

export default Signup;
