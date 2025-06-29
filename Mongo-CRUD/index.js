// let express=require("express");
// const { dbConnection } = require("./dbConnection");
// let app=express();

// app.use(express.json())

// app.get("/student-read",(req,res)=>{
//     res.send("student view api")
// })

// app.post("/student-insert",async(req,res)=>{
//     let myDB=await dbConnection();
//     let studentCollection=myDB.collection("students")
//     let obj={
//         sName:req.body.sName,
//         sEmail:req.body.sEmail,
//     }
//     let insertRes=await studentCollection.insertOne(obj)
//     let resObj={
//         status:1,
//         msg:"Data Insert",
//         insertRes
//     }
//     res.send(resObj)
// })

// app.listen("8000")

const express = require("express");
const { dbConnection } = require("./dbConnection");

const app = express();

app.use(express.json());

app.get("/student-read", async (req, res) => {
    try {
        const myDB = await dbConnection();
        const studentCollection = myDB.collection("students");

        const students = await studentCollection.find({}).toArray();

        res.send({
            status: 1,
            msg: "Students fetched successfully",
            data: students
        });
    } catch (err) {
        res.send({
            status: 0,
            msg: "Error fetching students",
            error: err.message
        });
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
