const mongoose = require("mongoose");

const DB = process.env.MONGO_URL

mongoose.connect(DB)
.then(()=> console.log("DataBase Connected"))
.catch((err)=>{
    console.log(err);
})

//--experimental-modules --es-module-specifier-resolution=node