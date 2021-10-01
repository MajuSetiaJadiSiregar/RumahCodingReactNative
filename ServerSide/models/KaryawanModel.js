const mongoose = require('mongoose');

const karyawanSchema = new mongoose.Schema({
   name : {type : String, required : true},
   email : {type : String, required : true},
   position : {type : String, required : true},
   imageUrl : {type : String, required : true}
});

module.exports = mongoose.model('Karyawans', karyawanSchema);