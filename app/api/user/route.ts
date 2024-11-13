import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { MongoClient } from 'mongodb';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const client = await clientPromise;
  const db = client.db('healthapp');
  const user = await db
    .collection('users')
    .findOne({ email: session.user.email });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const { password, ...userData } = user; // Exclude sensitive data
  return NextResponse.json(userData);
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: 'Email or password cannot be empty',
        }),
        { status: 400 }
      );
    }

    const client = await clientPromise; // Ensure only one connection
    const db = client.db('healthapp');
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ success: false, error: 'User not found' }),
        { status: 404 }
      );
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return new NextResponse(
        JSON.stringify({ success: false, error: 'Incorrect password' }),
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set cookie using `Set-Cookie` with an absolute URL
    const response = new NextResponse(
      JSON.stringify({ success: true, message: 'Login successful' }),
      { status: 200 }
    );

    response.headers.set(
      'Set-Cookie',
      `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict;`
    );

    return response;
  } catch (error) {
    console.error('Error during authentication:', error);
    return new NextResponse(
      JSON.stringify({ success: false, error: 'Failed to authenticate user' }),
      { status: 500 }
    );
  }
}
