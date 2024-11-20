'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

const SignOut = () => {
  return (
    <button
      className='p-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500'
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};

export default SignOut;
