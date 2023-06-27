// app.js

const express = require('express');
const app = express();

// Import routes
const userRoutes = require('./src/routes/userRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000; // Use the value of the PORT environment variable if available, or default to 3000
app.get('/',(req,res)=>{
    res.send("hi");
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


module.exports = app;
