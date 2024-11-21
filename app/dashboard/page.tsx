'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SignOut from '../components/SignOut';
import JournalForm from '../components/JournalForm';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [openJournal, setOpenJournal] = useState<boolean>(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/user', {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (status === 'authenticated') {
      fetchUserData();
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return (
      <main className='w-[90%] mx-auto'>
        {userData && (
          <div>
            <nav className='flex justify-between h-[80px] md:px-10 items-center text-xl font-semibold'>
              <div>
                <h1>Hello {userData.firstName}</h1>
              </div>
              <SignOut />
            </nav>
          </div>
        )}
        <div className='flex justify-center text-2xl'>
          <h2>Welcome to Dashboard Page</h2>
        </div>
        <div className='flex justify-center items-center gap-3 my-10 py-5'>
          <button
            type='button'
            className='p-2 px-4 bg-gray-200 dark:bg-green-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500'
            onClick={() => {
              setOpenJournal(!openJournal);
            }}
          >
            {openJournal ? 'Close Journal' : 'Create Journal'}
          </button>
          <button
            type='button'
            className='p-2 px-4 bg-gray-200 dark:bg-green-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500'
          >
            View Journals
          </button>
        </div>
        {openJournal && (
          <div>
            <JournalForm />
          </div>
        )}
      </main>
    );
  }

  return null;
};

export default Page;
