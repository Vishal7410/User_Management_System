const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    gender:String,
    status:String
})

const Userdb = mongoose.model('userdb',schema)// calling method mongoose.model inside these document name (userdb)

module.exports = Userdb;
