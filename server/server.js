import express from 'express';
import 'dotenv/config';
import userRouter from './routes/user.route.js'
import { errorHandler } from './libs/middleware.js';

const app = express();

app.use(express.json());

const PORT = 8000;

// Create a new '/api' route
app.use('/api/v1/users', userRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'not found' });
});

app.use(errorHandler)

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});