let express=require("express");
var mongoose=require("mongoose");
let enquiryModel=require('./models/enquiry.model');
require('dotenv').config();

//conect to mongodb
let app=express();
app.use(express.json());

app.post('/api/enquiry-insert',(req,res)=>{
    let {sName,sEmail,sPhone,sMessage}=req.body;
    let enquiry=new enquiryModel({
    name:sName,
    email:sEmail,
    phone:sPhone,
    message: sMessage
    });
    enquiry.save().then(()=>{
        res.send({status:1,message:"enquiry saved"});

    }).catch((err)=>{
        res.send({status:0,message:"error while save enquiry",error:err});
    })
})
app.get("/api/enquiry-list",async(req,res)=>{
    let enquiryList=await enquiryModel.find();
    res.status(200).json({status:1,message:"Enquiry list",data:enquiryList})
})
app.delete("/api/enquiry-delete/:id", async (req, res) => {
    let enquiryId = req.params.id;
    let deletedEnquiry = await enquiryModel.deleteOne({ _id: enquiryId });
    res.send({
        status: 1,
        message: "Enquiry deleted successfully",
        id: enquiryId,
        delRes: deletedEnquiry
    });
});
app.put("/api/enquiry-update/:id", async (req, res) => {
    let enquiryId = req.params.id;
    let { sName, sEmail, sPhone, sMessage } = req.body;
    let updateObj = {
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    };
    let updateRes = await enquiryModel.updateOne({ _id: enquiryId }, updateObj);
    res.send({
        status: 1,
        message: "Enquiry updated successfully",
        updateRes
    });
});

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to mongodb");
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port "+process.env.PORT);
    })
})
