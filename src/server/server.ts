import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './db.js';
import Contact from './models/Contact.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));

// Connect to MongoDB
connectDB();

// Health Check Endpoint
app.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting form' });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});