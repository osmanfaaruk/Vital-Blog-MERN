// dependencies
const express = require("express");
const dbConnect = require("./config/database");
const authRouter = require('./routes/userRoutes');
const bodyParser = require('body-parser')
const cors = require('cors')
const postRouter = require('./routes/postRoutes');
const profileRouter = require("./routes/profileRoutes");
const path = require('path');

// Calling a function
const app = express();
require('dotenv').config();
dbConnect();

app.use(cors({
    origin: true, // This will allow your Vercel URL
    credentials: true
}));
app.use(bodyParser.json());

// // Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to vital Blog");
// }); // Home Route

app.use('/', authRouter) // Register/login Function
app.use('/', postRouter) // post/get Route
app.use('/', profileRouter) // post/get Route



// Server configuration
const PORT = process.env.PORT || 4000;

// Serve frontend in production (optional)
if (process.env.NODE_ENV === 'production') {
    const buildPath = path.join(__dirname, 'frontend', 'build');
    if (require('fs').existsSync(buildPath)) {
        app.use(express.static(buildPath));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(buildPath, 'index.html'));
        });
    } else {
        app.get('/', (req, res) => {
            res.send('Backend API is running...');
        });
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
