import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import { Error as MongooseError } from 'mongoose';

interface WaitlistEntry {
  _id: string;
  email: string;
  name: string;
  company: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

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
  } catch (error: unknown) {
    console.error('Error adding to waitlist:', error);

    // Handle validation errors
    if (error instanceof Error && error.name === 'ValidationError') {
      const errors = typeof (error as unknown) === 'object' && error && 'errors' in error ? (error as { errors: Record<string, unknown> }).errors : {};
      const validationErrors = Object.values(errors).map(
        (err: unknown) => (err instanceof Error ? err.message : String(err))
      );
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Handle duplicate key error (email already exists)
    if (error instanceof MongooseError && typeof error === 'object' && error && 'code' in error && (error as { code: number }).code === 11000) {
      return NextResponse.json(
        { error: 'Email already exists in waitlist' },
        { status: 409 }
      );
    }

    if (error instanceof MongooseError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}

// GET - Retrieve waitlist entries (optional, for admin purposes)
export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<WaitlistEntry[]>>> {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const totalEntries = await Waitlist.countDocuments();
    const totalPages = Math.ceil(totalEntries / limit);
    const entries = await Waitlist.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      success: true,
      data: entries,
      pagination: {
        current: page,
        total: totalPages,
        count: entries.length,
        totalEntries,
      },
    });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch waitlist entries' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse<ApiResponse<{ success: boolean }>>> {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required' },
        { status: 400 }
      );
    }

    const result = await Waitlist.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { success: false, error: 'Entry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: { success: true } });
  } catch (error: unknown) {
    if (error instanceof MongooseError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
} 