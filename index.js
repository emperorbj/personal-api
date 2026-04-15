
import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});



app.get('/health', (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});


app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Opatola Bolaji Prince",
    email: "cwaku96@gmail.com",
    github: "https://github.com/emperorbj"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});