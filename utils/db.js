const mongoose = require('mongoose');
var dbConfig = require('../config/db');
const conn = mongoose.createConnection(`${dbConfig.mongod.connectString}/${dbConfig.mongod.db}`, { useNewUrlParser: true }).then(
 
    (con) => {  console.log('Mongo connected !'+con); return con},
     
    err => { console.log('Mongo Not connected !'+err);}
     
    );       
module.exports = conn;