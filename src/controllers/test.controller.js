// controllers/test.controller.js


const Test = require('../models/Test');
const { formatDate } = require('../utils/dateUtils');
const { fetchData } = require('../lib/spotifyAPI');



const getUsers = (req, res) => {
    // Logic to retrieve users from the database
    res.json({ message: 'Get all users from the controller' });
  };
  
  const createUser = (req, res) => {
    // Logic to create a new user in the database
    res.json({ message: 'Create a new user from the controller' });
  };
  
  module.exports = {
    getUsers,
    createUser,
  };
  