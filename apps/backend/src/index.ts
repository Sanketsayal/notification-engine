import express from 'express';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Notification engine backend is running on port ${PORT}`);
});