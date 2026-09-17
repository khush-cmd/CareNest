const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const PORT = 3001;

const healthRoute = require('./src/router/health.route');
const authRoutes = require('./src/router/auth.route')


app.use(express.json())
app.use('/api', healthRoute);
app.use('/api/auth' ,authRoutes);



const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
};

startServer();