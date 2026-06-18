import dotenv from 'dotenv';
import { connectDB, disconnectDB } from '../config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

dotenv.config();

// Seed the octofit_db database with test data
const seedData = async () => {
  await connectDB();

  console.log('🧹 Clearing existing collections...');
  await Promise.all([
    User.deleteMany(),
    Team.deleteMany(),
    Activity.deleteMany(),
    Workout.deleteMany(),
    Leaderboard.deleteMany(),
  ]);

  console.log('👥 Creating sample users...');
  const users = await User.create([
    {
      username: 'alicefit',
      email: 'alice@example.com',
      password: 'password123',
      profile: {
        firstName: 'Alice',
        lastName: 'Walker',
        avatar: 'https://example.com/avatars/alice.png',
        bio: 'Runner and team captain.',
      },
    },
    {
      username: 'bobstrong',
      email: 'bob@example.com',
      password: 'password123',
      profile: {
        firstName: 'Bob',
        lastName: 'Johnson',
        avatar: 'https://example.com/avatars/bob.png',
        bio: 'Cyclist who loves data.',
      },
    },
    {
      username: 'carapace',
      email: 'cara@example.com',
      password: 'password123',
      profile: {
        firstName: 'Cara',
        lastName: 'Nguyen',
        avatar: 'https://example.com/avatars/cara.png',
        bio: 'Strength trainer and coach.',
      },
    },
  ]);

  console.log('👥 Creating sample teams...');
  const teams = await Team.create([
    {
      name: 'Velocity Vanguards',
      description: 'A team focused on speed and performance.',
      owner: users[0]._id,
      members: [users[0]._id, users[1]._id],
    },
    {
      name: 'Champion Crew',
      description: 'A group for endurance and strength training.',
      owner: users[2]._id,
      members: [users[2]._id, users[1]._id],
    },
  ]);

  console.log('🏃 Creating sample activities...');
  await Activity.create([
    {
      user: users[0]._id,
      type: 'running',
      duration: 45,
      distance: 10,
      calories: 520,
      intensity: 'high',
      notes: 'Morning tempo run with strong finish.',
      date: new Date(),
    },
    {
      user: users[1]._id,
      type: 'cycling',
      duration: 60,
      distance: 30,
      calories: 700,
      intensity: 'moderate',
      notes: 'Steady ride around the lake.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    {
      user: users[2]._id,
      type: 'gym',
      duration: 50,
      calories: 400,
      intensity: 'high',
      notes: 'Full-body strength session.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 48),
    },
  ]);

  console.log('💪 Creating sample workouts...');
  await Workout.create([
    {
      user: users[0]._id,
      title: 'Speed Intervals',
      description: 'Interval training for improving race pace.',
      exercises: [
        { name: 'Warmup jog', sets: 1, reps: 1, weight: 0 },
        { name: '400m sprint', sets: 6, reps: 1, weight: 0 },
        { name: 'Cool down', sets: 1, reps: 1, weight: 0 },
      ],
      duration: 55,
      difficulty: 'intermediate',
      tags: ['running', 'intervals', 'endurance'],
    },
    {
      user: users[2]._id,
      title: 'Strength Circuit',
      description: 'Circuit style workout for full-body strength.',
      exercises: [
        { name: 'Squats', sets: 4, reps: 10, weight: 80 },
        { name: 'Bench press', sets: 4, reps: 8, weight: 60 },
        { name: 'Deadlift', sets: 3, reps: 6, weight: 100 },
      ],
      duration: 60,
      difficulty: 'advanced',
      tags: ['strength', 'circuit', 'power'],
    },
  ]);

  console.log('🏆 Creating leaderboard entries...');
  await Leaderboard.create([
    {
      user: users[0]._id,
      team: teams[0]._id,
      totalActivities: 5,
      totalDistance: 42,
      totalCalories: 2600,
      totalDuration: 300,
      rank: 1,
      points: 980,
    },
    {
      user: users[1]._id,
      team: teams[0]._id,
      totalActivities: 4,
      totalDistance: 35,
      totalCalories: 2400,
      totalDuration: 270,
      rank: 2,
      points: 870,
    },
    {
      user: users[2]._id,
      team: teams[1]._id,
      totalActivities: 3,
      totalDistance: 0,
      totalCalories: 2100,
      totalDuration: 220,
      rank: 3,
      points: 760,
    },
  ]);

  console.log('✅ Database seeding complete.');
};

seedData()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await disconnectDB();
    process.exit(0);
  });
