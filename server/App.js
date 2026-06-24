import express from 'express';
import path from 'path';

// Create a new Express application instance.
const app = express();

// Path to the React production build output.
const staticPath = path.resolve(process.cwd(), 'dist');

// Serve the compiled React app files under the same base path used by Vite.
app.use('/QuickEat', express.static(staticPath));

// Parse JSON request bodies for incoming requests.
app.use(express.json());

// Parse URL-encoded request bodies (form submissions).
app.use(express.urlencoded({ extended: true }));

// If the client asks for any route that is not an API route,
// return index.html so React Router can render the correct component.
app.use((req, res) => {
   res.sendFile(path.join(staticPath, 'index.html'));
});

// Export the configured app for use in index.js or other server startup code.
export default app;
