const express = require('express');
const router = express.Router();
const Brands = require("../models/brand.model")


router.get("",async(req,res)=>{
    try{
        const user = await Brands.find().lean().exec()
        res.status(200).send(user.address)
    }
    catch(err){
        res.status(400).send(err)
    }
})


router.get("/:id",async(res,req)=>{
    try{
        const user = await Brands.findById(req.params.id).lean().exec()
        res.status(200).send(user.address)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post("/create",async(req, res)=>{
    try{
        const brand = await Brands.create(req.body)
        res.status(200).send(brand)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.put("/:id",async(req, res)=>{
    try{
        const brand = await Brands.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(200).send(brand)
    }
    catch(err){
        res.status(400).send(err)
    }
})




module.exports = router;