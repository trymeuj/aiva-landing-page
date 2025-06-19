import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';

// POST - Add new waitlist entry
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await Waitlist.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already exists in waitlist' },
        { status: 409 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      name: name.trim(),
      email: email.toLowerCase().trim(),
    });

    const savedEntry = await waitlistEntry.save();

    return NextResponse.json(
      {
        message: 'Successfully added to waitlist',
        data: {
          id: savedEntry._id,
          name: savedEntry.name,
          email: savedEntry.email,
          createdAt: savedEntry.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error adding to waitlist:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(
        (err: any) => err.message
      );
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Handle duplicate key error (email already exists)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email already exists in waitlist' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Retrieve waitlist entries (optional, for admin purposes)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const waitlistEntries = await Waitlist.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('name email createdAt');

    const total = await Waitlist.countDocuments({});

    return NextResponse.json({
      data: waitlistEntries,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: waitlistEntries.length,
        totalEntries: total,
      },
    });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 