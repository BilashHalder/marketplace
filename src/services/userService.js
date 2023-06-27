// userService.js

const User = require('../models/User');

// Service function to register a new user
async function registerUser(name, email, phone, password) {
  try {
    const newUser = await User.create({ name, email, phone, password });
    return newUser;
  } catch (error) {
    throw new Error('An error occurred while registering the user.');
  }
}
 
module.exports = {
  registerUser,
};
