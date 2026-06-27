import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './server/App.js';

// Load environment variables from .env into process.env
dotenv.config({
   path: './.env',
});

const startServer = async () => {
   try {
      // Connect to the database first. If this fails, the catch block handles the error.
      await connectDB();

      // Optional Express app error handling for runtime server errors.
      app.on('error', (err) => {
         console.error('Server error:', err);
      });

      // Use PORT from environment or fallback to 5000.
      const port = process.env.PORT || 5000;

      // Start the HTTP server and listen for incoming requests.
      app.listen(port, () => {
         console.log(`Server running on port ${port}`);
      });
   } catch (error) {
      // Log any startup errors, such as database connection failures.
      console.error('Error starting server:', error);
   }
};

// Invoke the startup function.
startServer();
