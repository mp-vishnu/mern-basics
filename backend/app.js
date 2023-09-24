const express=require('express');
const app=express(); // creating an instance
const cors= require('cors');
app.use(express.json());
app.use(cors());
//route imports
const items=require("./routes/itemsRoute");


app.use("/api",items);
module.exports=app;