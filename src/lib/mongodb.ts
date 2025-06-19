import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:Mdhmongodb18114291@cluster0.janrs.mongodb.net/aiva-waitlist?retryWrites=true&w=majority';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Use 'const' for cached and type global as Record<string, unknown>
const globalWithCache = global as unknown as Record<string, unknown>;
const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } =
  (globalWithCache._mongooseCache as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }) || { conn: null, promise: null };

if (!globalWithCache._mongooseCache) {
  globalWithCache._mongooseCache = cached;
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB; 