
const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 5040


const app = express();

app.get("/", (req, res)=>{
    res.send({"msg": "Welcome to backend deployment"})
})

app.get("/about", (req, res)=>{
    res.send({"msg": "Welcome About"})
})

app.listen( port, ()=>{
    console.log(`http://localhost:${port}`)
})