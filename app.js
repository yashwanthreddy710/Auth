const express = require('express');
const connectDB = require('./config/connectDb');
const authRoutes = require('./routes/authRoutes');
const protectedRoute = require ('./routes/ProtectedRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use("/api", protectedRoute);

// Connect DB 
connectDB();

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));