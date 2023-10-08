// config.js
require("dotenv").config();
const NODE_ENV = process.env.NODE_ENV|| 'development';
const PORT = process.env.PORT || 3001;

const MONGO_URI = 
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGO_URI
    : process.env.MONGO_URI;

    const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

module.exports = {
  NODE_ENV,
  MONGO_URI,
  PORT,
  JWT_SECRET,
};