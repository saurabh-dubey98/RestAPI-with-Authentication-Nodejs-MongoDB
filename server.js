const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 3000;
const connectMongo = require('./config/db');

connectMongo();

const app = express();

// Middleware for parsing json and encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes for quering movies and auth
app.use('/movies', require('./routes/moviesRoute'));

// Middleware for error handling
app.use(require('./middleware/errorHandler'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})