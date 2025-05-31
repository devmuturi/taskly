import express from 'express';

const app = express();
const PORT = 8000;

// Create a new '/api' route
app.use('/api', (req, res) => {
  res.status(200).json({ message: 'Hello world!' });
});

app.use('/', (req, res) => {
  res.status(404).json({ message: 'not found' });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});