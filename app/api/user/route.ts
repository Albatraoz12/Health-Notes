import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('healthapp');
    const users = await db.collection('users').find({}).toArray();

    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password, gender } =
      await request.json();

    const client = await clientPromise;
    const db = client.db('healthapp');
    const usersCollection = db.collection('users');

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
    };
    await usersCollection.insertOne(newUser);

    return NextResponse.json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error('Error in user registration:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to register user' },
      { status: 500 }
    );
  }
}
