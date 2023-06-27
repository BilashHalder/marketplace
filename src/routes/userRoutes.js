// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Define user routes
router.post('/register', userController.registerUser);


module.exports = router;
