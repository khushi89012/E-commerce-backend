const express = require('express');
const connect = require('./src/config/db');
const User = require("./src/controllers/user.controller")
const Brands = require("./src/controllers/brand.controller")
const Product = require("./src/controllers/product.controller")

const app = express();
app.use(express.json());

app.use("/user",User)
app.use("/brand",Brands)
app.use("/product",Product)




app.listen(8000,async()=>{
    await connect
    console.log("server is running on port 8000");
})