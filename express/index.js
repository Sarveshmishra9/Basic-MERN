let express=require("express")
let app=express()
//Handling JSON Data in ExpressJS
app.use(express.json());

//custom ye application middleWare
let checkToken=(req,res,next)=>{
    console.log("Welcome")
    next();
}
app.use(checkToken)


//routing
app.get("/",(req,res)=>{
    res.send({status:1,msg:"Home page API"})
})

app.get("/news",(req,res)=>{
    res.send({status:1,msg:"news page API"})
})

app.get("/news/:id",(req,res)=>{
    let CurrentId=req.params.id // acces  the param ki value 
    res.send("dynamic param"+CurrentId)
})

app.get("/login",(req,res)=>{
    console.log(req.body)//object
    res.send({status:1,msg:"login API",bodyData:req.body,queryData:req.query})
})

app.listen("8000")