const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const categories = require('./routes/api/categories');
const users = require('./routes/api/users');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB-URI Config
const dbUri = process.env.MONGODB_URI || require('./config/keys.js').mongoURI;
// Connect to MongoDB
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', items);
app.use('/api/categories', categories);
app.use('/api/users', users);


if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}

const port = 5000;

app.listen(port, () => console.log(`Server starting on port ${port}`));