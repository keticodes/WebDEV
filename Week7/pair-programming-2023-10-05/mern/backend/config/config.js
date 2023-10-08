require("dotenv").config();

const PORT = process.env.PORT || 5000; // Set a default port if not defined
const MONGO_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGO_URI
    : "mongodb+srv://ketim:Kukamuu1@cluster0.5htk4vx.mongodb.net/?retryWrites=true&w=majority";

if (!PORT || !MONGO_URI) {
  throw new Error("Please provide PORT and MONGO_URI in the environment variables.");
}

module.exports = {
  MONGO_URI,
  PORT,
};
