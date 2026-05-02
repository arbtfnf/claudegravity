import express from 'express';
import cors from 'cors';
import { places } from './src/data';
import { exhausts } from './src/exhaustData';
import { superbikes } from './src/enthusiastData';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`[NITRO-API] ${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// API Routes
app.get('/api/places', (req, res) => {
  res.json(places);
});

app.get('/api/exhausts', (req, res) => {
  res.json(exhausts);
});

app.get('/api/superbikes', (req, res) => {
  res.json(superbikes);
});

// Health check
app.get('/health', (req, res) => {
  res.send('NITRO SERVER ONLINE 🏁');
});

app.listen(port, () => {
  console.log(`Biker Atlas Backend screaming on port ${port}`);
});
