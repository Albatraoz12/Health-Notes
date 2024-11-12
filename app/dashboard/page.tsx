import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import React from 'react';
import SignOut from '../components/SignOut';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <main>
      <div>Welcome to Dashboard Page</div>
      <SignOut />
    </main>
  );
};

export default Page;
