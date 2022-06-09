const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb+srv://khushi123:khushi123@cluster0.tmwwu.mongodb.net/shopping",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    })
    .then(()=>{
        console.log("connected to mongodb")
    })
    .catch((err)=>{
        console.log("error while connecting to mongodb",err)
    }
    )


