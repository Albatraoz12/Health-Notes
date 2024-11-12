// types.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
    } & DefaultSession['user'];
  }

  interface JWT {
    id: string;
    email: string;
  }
}