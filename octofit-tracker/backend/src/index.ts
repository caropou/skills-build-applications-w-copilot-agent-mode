import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req: Request, res: Response, next) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const allowedOrigin = codespaceName
    ? `https://${codespaceName}-5173.app.github.dev`
    : 'http://localhost:5173';

  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' });
});

// API Routes placeholder
app.use('/api/users', (req: Request, res: Response) => {
  res.json({ message: 'Users endpoint - coming soon' });
});

app.use('/api/activities', (req: Request, res: Response) => {
  res.json({ message: 'Activities endpoint - coming soon' });
});

app.use('/api/teams', (req: Request, res: Response) => {
  res.json({ message: 'Teams endpoint - coming soon' });
});

app.use('/api/leaderboard', (req: Request, res: Response) => {
  res.json({ message: 'Leaderboard endpoint - coming soon' });
});

app.use('/api/workouts', (req: Request, res: Response) => {
  res.json({ message: 'Workouts endpoint - coming soon' });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    app.listen(PORT, () => {
      const codespaceName = process.env.CODESPACE_NAME;
      const baseUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : `http://localhost:${PORT}`;

      console.log(`🚀 Server is running at ${baseUrl}`);
      console.log(`📚 Health check: ${baseUrl}/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
