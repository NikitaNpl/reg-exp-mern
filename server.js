const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const categories = require('./routes/api/categories');
const users = require('./routes/api/users');

const clientID = '8382cfd78e2814de8811';
const clientSecret = '50249d0d3d508a50f1cecded2ec51a905f80a062';

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys.js').mongoURI;
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.use('/api/items', items);
app.use('/api/categories', categories);
app.use('/api/users', users);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server starting on port ${port}`));