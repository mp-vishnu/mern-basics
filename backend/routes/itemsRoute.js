const express=require("express");
const { getAllItems,addItems } = require("../controllers/pageController");

const router=express.Router();


router.route("/items").get(getAllItems);
router.route("/items/new").post(addItems);
module.exports=router



