const express = require('express');
const router = express.Router();
const User = require("../models/user.model")



router.post("/", async (req, res) => {
    try {
        const user = await User.create()
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }


})

router.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec()
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})


router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})



router.put("/user/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get("/:id/address", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        res.status(200).send(user.address)
    }
    catch (err) {
        res.status(400).send(err)
    }

})

router.post("/:id/address/create", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        user.address.push(req.body)
        await user.save()
        res.status(200).send(user)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

router.put("/:id/address/:addressId", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        user.address.id(req.params.addressId).set(req.body)
    }
    catch (err) {
        res.status(400).send(err)
    }
})



module.exports = router