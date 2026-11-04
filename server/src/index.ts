import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'localapp-api',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/message', (_req, res) => {
  res.json({
    message: 'Welcome to LocalApp. Your backend is live.',
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
