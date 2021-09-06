// dependencies
const express = require("express");
const dbConnect = require("./config/database");
const router = require('./routes/userRoutes.js');
const bodyParser = require('body-parser')


// Calling a function
const app = express();
require('dotenv').config();
dbConnect();
app.use(bodyParser.json());


// Routes
app.get("/", (req, res) => {
  res.send("Welcome to vital Blog");
}); // Home Route

app.use('/', router) // Register Function









// Server configuration
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
