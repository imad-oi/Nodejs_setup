// lib/externalLibrary.js
const axios = require('axios');

// You can use external libraries like axios for making HTTP requests
const fetchData = async () => {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
};

module.exports = {
  fetchData,
};
