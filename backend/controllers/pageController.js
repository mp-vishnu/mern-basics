const Item = require("../model/itemModel");
// exports.getAllItems=(req,res)=>{
//     res.status(200).json({message:"route working"})
// }

//get all items
exports.getAllItems=(req,res)=>{
    res.status(200).json({message:"route working"})
}
// create item
exports.addItems=async (req,res)=>{
          const item = await Item.create(req.body);
          res.status(201).json({
              success: true,
              item
            });
          }
