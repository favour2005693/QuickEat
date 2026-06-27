import mongoose from 'mongoose';

// Connect to MongoDB using Mongoose.
// The connection URI is defined in  .env file as MONGODB_URI.
const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected');
   } catch (error) {
      // If the database connection fails, log the error and stop the process.
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
   }
};

export default connectDB;
