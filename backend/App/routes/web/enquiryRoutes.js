// App/routes/web/enquiryRoutes.js
let express = require('express');
const { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require('../../controllers/web/enquiryController');
let enquiryRouter = express.Router();

enquiryRouter.post("/insert", enquiryInsert)
enquiryRouter.get("/view", enquiryList)
enquiryRouter.delete("/delete/:id", enquiryDelete)
enquiryRouter.put("/update/:id", enquiryUpdate)

module.exports = enquiryRouter;




// //enquiryRoutes.js
// let express=require('express');
// const { enquiryInsert, enquiryList, enquiryDelete } = require('../../controllers/web/enquiryController');
// let enquiryRouter=express.Router();

// enquiryRouter.post("/insert",enquiryInsert)
// enquiryRouter.post("/view",enquiryList)
// enquiryRouter.delete("/delete/:id",enquiryDelete)
// module.exports=enquiryRouter;