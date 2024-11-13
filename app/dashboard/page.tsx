'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SignOut from '../components/SignOut';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);

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
      <main>
        <div>Welcome to Dashboard Page</div>
        {userData && (
          <div>
            <h2>User Details:</h2>
            <p>Email: {userData.firstName}</p>
          </div>
        )}
        <SignOut />
      </main>
    );
  }

  return null;
};

export default Page;
