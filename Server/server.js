const express = require('express');
const connectDB = require('./config/db');
const complaintRoutes = require('./routes/complaint');
const userRoutes = require('./routes/users');
const cors = require('cors'); // Add CORS middleware

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS to allow requests from frontend (React or other)
app.use(cors({
  origin: 'http://localhost:3000', // Adjust based on your frontend's URL
  methods: 'GET,POST,PUT,DELETE',  // Specify allowed methods if needed
  credentials: true                // Enable credentials (e.g., cookies) if necessary
}));

// Connect to Mong
