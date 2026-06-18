# OctoFit Tracker Backend

Express-based REST API for the OctoFit Tracker multi-tier application.

## Setup

### Prerequisites
- Node.js (LTS)
- MongoDB running on `mongodb://localhost:27017`

### Installation

```bash
npm install
```

### Environment Configuration

Copy `.env.example` to `.env` and configure as needed:

```bash
cp .env.example .env
```

**Environment Variables:**
- `PORT`: Server port (default: 8000)
- `NODE_ENV`: Development environment (default: development)
- `MONGODB_URI`: MongoDB connection string (default: mongodb://localhost:27017)
  - Example: `mongodb://localhost:27017`
  - Set this to your remote MongoDB URI if using a hosted database.
- `CODESPACE_NAME`: GitHub Codespace name (for Codespaces deployments)

## Development

Start the development server with hot reload:

```bash
npm run dev
```

The server will be available at `http://localhost:8000`

### Health Check

```bash
curl http://localhost:8000/health
```

## Building

Compile TypeScript to JavaScript:

```bash
npm run build
```

Output is generated in the `dist/` directory.

## Production

Build and start the production server:

```bash
npm run build
npm start
```

## API Routes

### Users
- `GET/POST /api/users` - User management endpoints (coming soon)

### Activities
- `GET/POST /api/activities` - Activity logging endpoints (coming soon)

### Teams
- `GET/POST /api/teams` - Team management endpoints (coming soon)

### Leaderboard
- `GET /api/leaderboard` - Leaderboard data (coming soon)

### Workouts
- `GET/POST /api/workouts` - Workout suggestions (coming soon)

## Database

The backend uses MongoDB with Mongoose for data persistence. The following models are available:

- **User** - User profiles and authentication
- **Team** - Team management
- **Activity** - Activity logging
- **Workout** - Workout definitions
- **Leaderboard** - Competitive rankings

All models are defined in `src/models.ts`.

## CORS Configuration

CORS is configured to allow requests from the frontend:
- **Development**: `http://localhost:5173`
- **Codespaces**: `https://{CODESPACE_NAME}-5173.app.github.dev`

## Architecture

```
src/
├── index.ts    - Express app setup and route definitions
├── db.ts       - MongoDB connection management
└── models.ts   - Mongoose data models
```
