
// App/models/enquiry.model.js
const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
}, { timestamps: true });

module.exports = mongoose.model("enquiry", enquirySchema);
// let mongoose=require('mongoose');
// let Schema=mongoose.Schema;
// let enquirySchema=new Schema({ //schema->table
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     phone:{
//         type:String,
//         required:true
//     },
//     message:{
//         type:String,
//         required:true
//     }
// });

// let enquiryModel=mongoose.model("enquiry",enquirySchema)//"enquiry" ->collection ,userEnquirySchema->field
// module.exports=enquiryModel;