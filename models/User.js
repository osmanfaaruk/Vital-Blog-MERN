// Dependencies
const {model, Schema} = require('mongoose');
const useSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
}, [timestamps = true]);

module.exports = model('user', useSchema);