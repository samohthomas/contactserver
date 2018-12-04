const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    _id: false,
    first_name: String,
    last_name: String
});


const UserModelSchema = new Schema({
    name: nameSchema,
    user_name: String,
    password: String,
    phone: Number,
    update_date: Date,
    create_date: Date,
    user_status : {type:Boolean,default:true}
});

module.exports = mongoose.model('UsersModel', UserModelSchema,'users' );