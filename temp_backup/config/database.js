// Dependencies
const mongoose = require('mongoose')
require('dotenv').config();

const dbConnect = async (req, res, next) =>{
    try {
        const response = await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Connection is established with database')
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnect;