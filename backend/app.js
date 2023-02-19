require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./Routes/router")
const cors =  require('cors');

const DB = process.env.MONGO_URL

app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("./uploads"));
app.use(router)

mongoose.set('strictQuery', false);
mongoose.connect(DB).then(() => console.log("Database Connected")).then(() => {
    app.listen(5000)
}).catch((err) => console.log("DB Connect Error"));
