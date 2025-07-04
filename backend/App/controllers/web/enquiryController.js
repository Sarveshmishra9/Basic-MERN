const mongoose = require("mongoose");
const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
    let { name, email, phone, message } = req.body;
    let enquiry = new enquiryModel({ name, email, phone, message });
    enquiry.save().then(() => {
        res.send({ status: 1, message: "enquiry saved" });
    }).catch((err) => {
        res.send({ status: 0, message: "error while save enquiry", error: err });
    })
}

let enquiryList = async (req, res) => {
    let enquiry = await enquiryModel.find();
    res.send({ status: 1, enquiryList: enquiry });
}

let enquiryDelete = async (req, res) => {
    let enId = req.params.id;
    await enquiryModel.findByIdAndDelete(enId);
    res.send({ status: 1, message: "Enquiry delete successfully" });
}

let enquiryUpdate = async (req, res) => {
    let enId = req.params.id;
    let { name, email, phone, message } = req.body;
    await enquiryModel.findByIdAndUpdate(enId, { name, email, phone, message });
    res.send({ status: 1, message: "Enquiry updated successfully" });
}

module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate };


