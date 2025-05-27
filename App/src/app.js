/**
    * @author  EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

const express = require('express');
const memeRoutes = require('./routes/memeRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/memes', memeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});