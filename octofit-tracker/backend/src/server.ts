import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const frontendUrl = codespaceName
  ? `https://${codespaceName}-5173.app.github.dev`
  : 'http://localhost:5173';
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', frontendUrl);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running', baseUrl: apiBaseUrl });
});

// API Routes placeholder
app.get('/api/users', (req: Request, res: Response) => {
  res.json({ message: 'Users endpoint - coming soon' });
});

app.get('/api/activities', (req: Request, res: Response) => {
  res.json({ message: 'Activities endpoint - coming soon' });
});

app.get('/api/teams', (req: Request, res: Response) => {
  res.json({ message: 'Teams endpoint - coming soon' });
});

app.get('/api/leaderboard', (req: Request, res: Response) => {
  res.json({ message: 'Leaderboard endpoint - coming soon' });
});

app.get('/api/workouts', (req: Request, res: Response) => {
  res.json({ message: 'Workouts endpoint - coming soon' });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at ${apiBaseUrl}`);
      console.log(`📚 Health check: ${apiBaseUrl}/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
