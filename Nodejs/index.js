// const addToCart = require("./cartModule")
// console.log(addToCart())

let http=require("http")

let server=http.createServer((req,res)=>{
    res.end("Welcome to backend")
})

server.listen("8000") //http://localhost:8000/

