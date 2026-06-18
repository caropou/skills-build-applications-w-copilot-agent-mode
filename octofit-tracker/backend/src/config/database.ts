import mongoose, { Connection } from 'mongoose';

const DB_NAME = 'octofit_db';

let cachedConnection: Connection | null = null;

export const connectDB = async (): Promise<Connection> => {
  if (cachedConnection) {
    console.log('Using cached database connection');
    return cachedConnection;
  }

  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    const connection = await mongoose.connect(`${mongoUri}/${DB_NAME}`, {
      retryWrites: true,
      w: 'majority',
    });

    cachedConnection = connection.connection;
    console.log(`✅ Connected to MongoDB: ${DB_NAME}`);
    return cachedConnection;
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    throw error;
  }
};

export const disconnectDB = async (): Promise<void> => {
  if (cachedConnection) {
    await mongoose.disconnect();
    cachedConnection = null;
    console.log('Disconnected from MongoDB');
  }
};
