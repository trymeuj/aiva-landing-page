import mongoose, { Schema, Document } from 'mongoose';

export interface IWaitlist extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const WaitlistSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot be longer than 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address',
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Create index on email for faster queries
WaitlistSchema.index({ email: 1 });

export default mongoose.models.Waitlist || mongoose.model<IWaitlist>('Waitlist', WaitlistSchema); 