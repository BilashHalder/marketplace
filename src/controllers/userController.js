// userController.js

const userService = require('../services/userService');

// Controller function to handle user registration
async function registerUser(req, res) {
  try {
    const { name, email, phone, password } = req.body;
    const newUser = await userService.registerUser(name, email, phone, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
}

module.exports = {
  registerUser,
};
